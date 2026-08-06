# Implementando Autenticação (Email/Senha) e Login com Google — Guia passo a passo

Este guia passo a passo mostra como implementar autenticação por email/senha e login com Google em um projeto Java Spring Boot novo ou existente. As instruções são genéricas e detalhadas para que você possa aplicar em qualquer projeto.

Objetivo
- Implementar registro (signup) e login (email/senha).
- Implementar login com Google (usando idToken verificado no backend).
- Usar JWT para autenticação (token de acesso + refresh token).
- Manter boas práticas de segurança (hash de senhas, verificação de tokens, CORS).

Pré-requisitos
- Java 17+ (o guia assume Java 21 no seu projeto, mas Java 17+ funciona)
- Maven ou Gradle
- Banco de dados relacional (Postgres, MySQL, H2 em testes)
- Conta Google para criar OAuth client ID (para login com Google)

Visão geral dos conceitos (simples)
- Password hashing: nunca armazene senhas em texto; use um algoritmo como BCrypt para guardar apenas hashes.
- JWT (JSON Web Token): token assinado que contém informações (claims). O backend assina e verifica tokens — o cliente envia o token em Authorization: Bearer <token>.
- Refresh token: token de longa duração para obter novos tokens de acesso sem pedir login novamente.
- Provider Google / idToken: o frontend obtém um idToken do Google; o backend valida esse token (verifica assinatura e audience) e confia nos dados do usuário.

Passo a passo numerado (faça em ordem)

Etapa 1 — Criar projeto/base
1.1. Criar projeto Spring Boot: usando Spring Initializr (https://start.spring.io) ou manualmente com Maven/Gradle.
- Dependências mínimas: Spring Web, Spring Data JPA, Spring Security, Validation, Banco de dados driver (Postgres), Lombok (opcional).
- Adicione dependências extras: com.auth0:java-jwt, com.google.api-client:google-api-client, com.fasterxml.jackson.datatype:jackson-datatype-jsr310.

Etapa 2 — Configurar propriedades e variáveis de ambiente
2.1. application.properties (ou application.yml)
- Defina a conexão com o banco e variáveis que não devem ficar no repo:
  spring.datasource.url=jdbc:postgresql://localhost:5432/seu_banco
  spring.datasource.username=${POSTGRES_USER}
  spring.datasource.password=${POSTGRES_PASSWORD}

- JWT secret e Google client id (via env vars):
  jwt.secret=${JWT_SECRET}
  google.client-id=${GOOGLE_CLIENT_ID}.apps.googleusercontent.com

Por quê: manter segredos fora do código-fonte e permitir variação entre ambientes.

Etapa 3 — Dependências necessárias (pom.xml exemplos)
- Spring Boot starters: web, data-jpa, security, validation
- JWT: com.auth0:java-jwt
- Google IdToken verification: com.google.api-client:google-api-client
- Jackson JSR310 module: com.fasterxml.jackson.datatype:jackson-datatype-jsr310
- Driver do banco (postgresql)

Etapa 4 — Criar entidade User (Usuario)
4.1. Exemplo simples (JPA):
- Campos: id (UUID), name, email (unique), password (nullable), provider (ENUM: LOCAL, GOOGLE), ativo (boolean).
- Por quê: permitir usuários sem senha (criados via Google) e distinguir origem de autenticação.

Etapa 5 — Repositório
- Crie interface UserRepository extends JpaRepository<User, UUID>
- Adicione método Optional<User> findByEmailIgnoreCase(String email)

Etapa 6 — PasswordEncoder
- Crie bean PasswordEncoder (BCrypt):
  @Bean
  public PasswordEncoder passwordEncoder() { return new BCryptPasswordEncoder(); }
- Por quê: usado para salvar e comparar senhas com segurança.

Etapa 7 — UserDetailsService
- Implemente UserDetailsService para que Spring Security possa carregar usuários por username (email):
  public UserDetails loadUserByUsername(String username) { return userRepository.findByEmailIgnoreCase(username).orElseThrow(...); }
- Por quê: AuthenticationManager usa essa interface para autenticar credenciais.

Etapa 8 — Configurar SecurityFilterChain
- Configure endpoints públicos (permitAll) e proteger os demais.
- Exemplo: permit /auth/login, /auth/register, /auth/google, /auth/refresh-token
- Defina SessionCreationPolicy.STATELESS e adicione filtro JWT antes do UsernamePasswordAuthenticationFilter.
- Configure CORS conforme frontend.

Etapa 9 — Implementar TokenService (JWT)
- Funções: generateToken(user), generateRefreshToken(user), verifyToken(token) -> subject, verifyRefreshToken -> subject (user id)
- Use biblioteca java-jwt para criar/verificar tokens com HMAC256 secret.
- Claims mínimos: issuer, subject (email ou id), type ("token" or "refresh-token"), expiresAt.
- Por quê: separar lógica de geração/validação de tokens facilita manutenção e testes.

Etapa 10 — Implementar endpoints de Auth (Controller)
- POST /auth/register -> cria usuário local
- POST /auth/login -> recebe {email, password}, autentica e retorna {token, refreshToken}
- POST /auth/refresh-token -> recebe refresh token e retorna novos tokens
- POST /auth/google -> recebe {idToken} e retorna tokens (verificar token com Google)

Etapa 11 — Implementar AuthService
- register(RegisterData): verificar existência, passwordEncoder.encode(password), salvar user
- login(LoginData): criar UsernamePasswordAuthenticationToken(email, password) e chamar authenticationManager.authenticate(); ao autenticar, gerar tokens via TokenService
- loginWithGoogle(idToken): verificar token Google, extrair payload (email, name), buscar ou criar usuário com provider=GOOGLE, gerar tokens
- refreshToken(refreshToken): verificar e gerar novos tokens

Etapa 12 — Implementar verificação do token Google
- Opção A (leve, direta): usar GoogleIdTokenVerifier (google-api-client) e verificar audience = client id.
- Opção B (integrada ao Spring): usar spring-security-oauth2-client e configurar OAuth2 login (requer fluxos diferentes — mais indicado para apps web com redirect).
- Por quê: validação no backend é necessária para não confiar no frontend.

Etapa 13 — Implementar filtro JWT (AccessTokenFilter)
- Ler header Authorization
- Extrair token (remover `Bearer `)
- Chamar tokenService.verifyToken(token) para obter subject (email)
- Buscar usuário no banco e criar Authentication (UsernamePasswordAuthenticationToken) com authorities
- Setar SecurityContextHolder.getContext().setAuthentication(authentication)
- Trate exceptions e retorne 401 com JSON (use ObjectMapper gerenciado pelo Spring)

Etapa 14 — Jackson + LocalDateTime
- Se usar LocalDateTime em respostas, adicionar jackson-datatype-jsr310 ao pom e registrar JavaTimeModule no ObjectMapper:
  @Bean
  public ObjectMapper objectMapper() { var m = new ObjectMapper(); m.registerModule(new JavaTimeModule()); m.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS); return m; }
- Por quê: evitar erros de (de)serialização de datas.

Etapa 15 — Testes e verificação local
- Variáveis de ambiente: export POSTGRES_USER=..., POSTGRES_PASSWORD=..., JWT_SECRET=uma_chave_segura, GOOGLE_CLIENT_ID=seu_client_id
- Rodar aplicação e testar endpoints com curl ou Postman.
- Exemplos curl:
  Registro:
  curl -X POST http://localhost:8080/auth/register -H 'Content-Type: application/json' -d '{"name":"Fulano","email":"fulano@example.com","password":"senha"}'

  Login:
  curl -X POST http://localhost:8080/auth/login -H 'Content-Type: application/json' -d '{"email":"fulano@example.com","password":"senha"}'

  Acesso a rota protegida:
  curl -H "Authorization: Bearer <token>" http://localhost:8080/protected

  Google login (front obtém idToken):
  curl -X POST http://localhost:8080/auth/google -H 'Content-Type: application/json' -d '{"idToken":"<ID_TOKEN_FROM_GOOGLE>"}'

Etapa 16 — Boas práticas de segurança
- Use segredos fortes para JWT_SECRET.
- Faça rotação/expiração de refresh tokens e suporte a invalidação (armazenando tokens ou uma whitelist/blacklist).
- Proteja endpoints sensíveis com checagens adicionais (user.isActive(), roles, rate limiting).
- Não retorne stacks/exceptions para o cliente em produção.

Etapa 17 — Tratações de erros e mensagens
- Padronize respostas de erro (códigos HTTP e JSON com message, timestamp).
- Diferencie 401 (não autorizado), 403 (proibido), 400 (request inválido).

Etapa 18 — Deploy e variáveis de ambiente
- Configure JWT_SECRET e GOOGLE_CLIENT_ID no ambiente do servidor (CI/CD, host, containers).
- Nunca commite segredos ao git.

Etapa 19 — Problemas comuns e soluções rápidas
- Erro "LocalDateTime not supported": adicionar jackson-datatype-jsr310 e configurar ObjectMapper.
- Erro JWT inválido: verifique se JWT_SECRET da criação e da verificação são iguais e não nulos.
- Erro de senha inválida: confirme que o algoritmo de hash usado para comparar (BCrypt) é o mesmo usado para gerar a senha.
- Google idToken inválido: verifique audience (client id) e se token é realmente do Google.

Etapa 20 — Checklist final (antes de considerar pronto)
- [ ] Registro funcionando e salva hash
- [ ] Login retorna token e refresh token
- [ ] Token protegido acessa endpoints
- [ ] Refresh token renova sessão
- [ ] Login com Google valida idToken e cria usuário quando necessário
- [ ] Segredos configurados via variáveis de ambiente
- [ ] Jackson config para datas
- [ ] CORS configurado para o frontend

Extras úteis
- Arquitetura: mantenha TokenService, AuthService e UserService separados para responsabilidade única.
- Auditing: registre tentativas de login falhas para detectar ataques.
- Monitoring: registre métricas de uso de tokens e falhas de autenticação.

Se desejar, posso gerar um esqueleto de código (classes e endpoints) aplicado a este guia, ou gerar exemplos curl/requests mais completos. Diga qual formato prefere (Maven/Gradle; plain classes; usar google-api-client ou spring-security-oauth2-client).