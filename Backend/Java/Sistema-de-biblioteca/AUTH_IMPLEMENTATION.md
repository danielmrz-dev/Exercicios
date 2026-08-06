# Autenticação (Email/Senha e Google) — Guia passo a passo

Este documento explica, passo a passo e em linguagem simples, como implementar login por email/senha e login com Google
mantendo exatamente o padrão usado neste projeto.

Resumo do que já existe no projeto

- Entidade de usuário: src/main/java/br/com/biblioteca/domain/usuario/Usuario.java
- Repositório: src/main/java/br/com/biblioteca/domain/usuario/UsuarioRepository.java
- Serviço de usuários (UserDetailsService): src/main/java/br/com/biblioteca/domain/usuario/UsuarioService.java
- Serviço de autenticação: src/main/java/br/com/biblioteca/domain/auth/AuthService.java
- Serviço de tokens JWT: src/main/java/br/com/biblioteca/domain/auth/TokenService.java
- Controller de autenticação: src/main/java/br/com/biblioteca/controller/LoginController.java
- Filtro que valida token: src/main/java/br/com/biblioteca/config/AccessTokenFilter.java
- Configuração de segurança: src/main/java/br/com/biblioteca/config/SecurityConfig.java
- Arquivo de propriedades: src/main/resources/application.properties

Pré-requisitos

1. Java (versão do projeto: 25)
2. Maven (ou Gradle) para buildar
3. Banco de dados configurado conforme application.properties
4. Variáveis de ambiente: POSTGRES_USER, POSTGRES_PASSWORD, JWT_SECRET, GOOGLE_CLIENT_ID

Visão geral (o quê e por quê)

- Registro (register): cria usuário local com senha criptografada (BCrypt). Por que: nunca salvar senhas em texto.
- Login (email/senha): usa AuthenticationManager para delegar a validação do par email+senha ao Spring Security (via
  UsuarioService que implementa UserDetailsService). Por que: reaproveita a infraestrutura da Spring Security.
- Login com Google: o frontend obtém um idToken do Google (Sign in with Google). O backend valida esse idToken com a
  biblioteca Google API (GoogleIdTokenVerifier). Depois busca ou cria um Usuario com provider=GOOGLE. Por que: assim
  confiamos na autenticação do Google e evitamos armazenar senha quando o usuário usa Google.
- Tokens JWT: gerados por TokenService (java-jwt), usados para autenticar requisições. Há token de acesso e refresh
  token. Por que: stateless auth, mais simples para APIs.
- Filtro (AccessTokenFilter): captura Authorization: Bearer <token>, valida via TokenService e popula SecurityContext
  com o Usuario autenticado. Por que: garantir que endpoints protegidos tenham usuário no contexto.

Passo a passo detalhado (numerado)

1) Verificar dependências (pom.xml)

- O projeto já inclui: spring-boot-starter-security, spring-data-jpa, java-jwt (com.auth0), google-api-client,
  jackson-datatype-jsr310.
- Por que: essas bibliotecas provêm as funcionalidades necessárias (security, JPA, JWT, verificação de token Google,
  serialização de datas).
- Ação: abrir pom.xml e confirmar presença; se faltar `jackson-datatype-jsr310` adicionar.

2) Variáveis de ambiente e application.properties

- Arquivo: src/main/resources/application.properties
- Entradas requeridas:
    - spring.datasource.url, spring.datasource.username, spring.datasource.password
    - jwt.secret (ou jwt-secret — veja observação abaixo)
    - google.client-id
- Observação crítica: a propriedade usada em TokenService é `@Value("${jwt-secret}")` mas em application.properties está
  `jwt.secret`. Escolher um formato e manter consistente. Exemplo seguro: defina em application.properties
  `jwt-secret=${JWT_SECRET}` ou altere TokenService para `@Value("${jwt.secret}")`.
- Por que: se a chave do JWT ficar vazia o serviço de tokens falhará.

3) Estrutura e campos do Usuario

- Arquivo: src/main/java/br/com/biblioteca/domain/usuario/Usuario.java
- Campos importantes: id (UUID), name, email (único), password (nullable), provider (enum UserAuthProvider), ativo.
- Por que: password pode ser null para usuários criados via Google (provider=GOOGLE).
- Ação: manter o campo `provider` e garantir que `email` seja `unique=true` no banco.

4) Registro de usuário (signup)

- Controller: POST /auth/register -> LoginController.register -> AuthService.register
- O que acontece: AuthService.register valida se já existe, codifica a senha (`passwordEncoder.encode`) e salva o
  Usuario.
- Por que: evitar duplicidade e salvar senha criptografada.
- Ação prática:
    - Verificar que PasswordEncoder bean existe em SecurityConfig (já há: BCryptPasswordEncoder).
    - Teste manual: enviar POST para /auth/register com JSON {"name":"...","email":"...","password":"..."} e verificar
      inserção no banco.

5) Login email/senha

- Endpoint: POST /auth/login -> LoginController.login -> AuthService.login
- Fluxo:
    1. LoginRequestData contém email e password.
    2. AuthService cria UsernamePasswordAuthenticationToken e chama `authenticationManager.authenticate(...)`.
    3. O AuthenticationManager usa UsuarioService.loadUserByUsername (que retorna Usuario) e PasswordEncoder para
       comparar senhas.
    4. Em sucesso, AuthService chama TokenService.generateToken (...) e generateRefreshToken (...).
- Por que usar AuthenticationManager: delega ao Spring Security, que aplica corretamente políticas e encoding.
- Ação prática:
    - Garantir que UsuarioService implemente UserDetailsService (já implementa).
    - Garantir que Usuario.getPassword () retorna a senha criptografada (já implementado) e getUsername () retorna
      email.
    - Teste: POST /auth/login com credenciais corretas deve retornar {token, refreshToken}.

6) Validação do token nas requisições (filtro)

- Arquivo: AccessTokenFilter.java
- O que faz: pega header Authorization, extrai token, chama tokenService.verifyToken (token) — esse método retorna o
  subject (email). Com o email, busca Usuario no banco e cria Authentication no SecurityContext.
- Por que: permitir acesso a endpoints protegidos sem estado de sessão.
- Ação prática:
    - Verificar se AccessTokenFilter injeta o ObjectMapper do Spring (para mensagens JSON) e usa TokenService
      corretamente.
    - Teste: após login, faça requisição com header `Authorization: Bearer <token>` a um endpoint protegido e confirme
      sucesso.

7) Implementação do Refresh Token

- Endpoint: POST /auth/refresh-token -> AuthService.refreshToken
- Fluxo: TokenService.verifyRefreshToken valida refresh token e retorna id do usuário; AuthService busca usuário por id
  e gera novo token + refresh token.
- Por que: permitir renovar sessão sem pedir senha.
- Atenção: refresh tokens têm prazo maior (no projeto, 10080 minutos = 7 dias).

8) Login com Google (OAuth2 token verification)

- Endpoint: POST /auth/google -> receives { idToken }
- Fluxo:
    1. Frontend obtém idToken usando Google Sign-In SDK.
    2. Backend recebe idToken e chama AuthService.verifyGoogleIdToken (idToken).
    3. verifyGoogleIdToken usar GoogleIdTokenVerifier com google.client-id para garantir que token foi emitido para o
       seu app.
    4. Se válido, extrai email e name; busca Usuario por email; se não existir, cria Usuario com provider=GOOGLE e sem
       senha.
    5. Gera JWT e refresh token via TokenService.
- Por que: o idToken é uma prova do Google; o backend deve sempre verificar (não confiar apenas no frontend).
- Ação prática:
    - Registrar `google.client-id` no application.properties (ou via variáveis de ambiente). No arquivo atual a chave é
      `google.client-id=${GOOGLE_CLIENT_ID}.apps.googleusercontent.com`.
    - No frontend: usar Google Identity Services para obter idToken e enviar ao backend.
    - Teste: obtenha idToken de uma conta permitida e envie para /auth/google; verifique se recebe tokens.

9) Ajustes e verificações cruciais

- Propriedade JWT: corrigir mismatch entre `@Value` e application.properties (jwt-secret vs jwt.secret).
- Jackson + LocalDateTime: garantir que `jackson-datatype-jsr310` esteja no pom.xml e que haja um ObjectMapper
  configurado (criado em src/main/java/br/com/biblioteca/config/JacksonConfig.java) para serializar LocalDateTime.
- CORS: SecurityConfig já permite origin http://localhost:4200; ajuste se frontend estiver em outro host.
- Password null: proteger endpoints de alteração de usuário para não permitir setPassword (null) acidentalmente.

10) Segurança extras recomendadas (melhorias)

- Verificação de conta ativa: AccessTokenFilter já carrega Usuario; verifique `usuario.isAtivo()` antes de autenticar.
- Rotas de logout: invalidar refresh tokens (precisa armazenamento se desejar invalidação explícita).
- Rotas de alteração de senha: exigir senha atual antes de alterar.
- Rate-limit em endpoints de autenticação para evitar brute force.

11) Testes manuais / checklist

- [ ] Registrar usuário local -> banco tem registro, senha encriptada
- [ ] Login local -> retorno de token + refreshToken
- [ ] Acessar rota protegida usando header Authorization -> sucesso
- [ ] Refresh token -> novos tokens
- [ ] Google login -> retorna token; se não existir usuário, é criado com provider GOOGLE
- [ ] Verificar logs de erros (ex.: token secret não carregado; jwt secret mismatch)

12) Problemas comuns e como resolver

- Erro: "LocalDateTime not supported" -> adicionar jackson-datatype-jsr310 e configurar ObjectMapper.
- Erro: Token JWT inválido / Null secret -> checar propriedade JWT no application.properties e @Value usage.
- Erro: AuthenticationManager rejeita credenciais -> confirmar senha armazenada está BCrypt e PasswordEncoder bean
  existe.
- Erro: Google token inválido -> checar `google.client-id` e se idToken veio do Google Identity do mesmo client id.

Arquivos principais (resumo com caminhos)

- src/main/java/br/com/biblioteca/controller/LoginController.java
- src/main/java/br/com/biblioteca/domain/auth/AuthService.java
- src/main/java/br/com/biblioteca/domain/auth/TokenService.java
- src/main/java/br/com/biblioteca/domain/auth/LoginRequestData.java
- src/main/java/br/com/biblioteca/domain/auth/RegisterRequestData.java
- src/main/java/br/com/biblioteca/domain/auth/RefreshTokenData.java
- src/main/java/br/com/biblioteca/domain/auth/GoogleLoginRequestData.java
- src/main/java/br/com/biblioteca/domain/usuario/Usuario.java
- src/main/java/br/com/biblioteca/domain/usuario/UsuarioRepository.java
- src/main/java/br/com/biblioteca/domain/usuario/UsuarioService.java
- src/main/java/br/com/biblioteca/config/SecurityConfig.java
- src/main/java/br/com/biblioteca/config/AccessTokenFilter.java
- src/main/resources/application.properties

Seção final: mudanças práticas que talvez precise aplicar agora (checklist curto)

1. Corrigir `@Value` em TokenService ou renomear propriedade em application.properties para manter `jwt-secret`/
   `jwt.secret` consistente.
2. Garantir que JacksonConfig existe e registra JavaTimeModule (para LocalDateTime).
3. Garantir que `jackson-datatype-jsr310` está no pom.xml (já está).
4. Confirmar `google.client-id` está configurado (via env var GOOGLE_CLIENT_ID).
5. Testar fluxo completo (register -> login -> acessar rota -> refresh) e Google login.

---

Se quiser, posso:

- Gerar exemplos de chamadas curl para cada endpoint (register, login, google, refresh-token) — diga se prefere.
- Corrigir o `@Value` mismatch automaticamente no código e criar testes básicos.

