# Configuração do TypeScript

1. Inicializar o projeto com Node.js
   Comando => `npm init`

2. Instalar o TypeScript
    2.1. Instalação Global => `npm install -g typescript`
    2.2. Instalação Global => `npm install typescript`

    ##   Observações  ##
    1. A instalação local é mais recomendada pois conforme o TypeScript é atualizado, os projetos feitos com versões anteriores continuam funcionando.
    2. Como o TypeScript é utilizado apenas na etapa de desenvolvimento, lembrar de instalá-lo como uma dependência de desenvolvimento. O comando para fazer isso é `npm install typescript -D`. O prefixo `-D` é abreviação de `--save-dev`.

3. Utilizar o TypeScript para compilar/transpilar o código, ou seja, converter o código `.ts` em código `.js`.
   O comando para fazer isso é `npx tsc (nome do arquivo .ts)`.
   - Para que a compilação ocorra de forma automática (*watch mode*), basta utilizar o comando `npx tsc -w` ou simplesmente `tsc -w`.

4. Configurar as regras de compilação no arquivo `tsconfig.json`.

   Existe uma variedade de regras que podem ser utilizadas, mas as principais são:
   
   # Dentro da opção "compilerOptions":
    **target: "es2016"**         `Especifica a versão do Javascript para qual o código TypeScript será compilado`
    **module: "commonjs"**       `Specify what module code is generated`
    **outDir: "./dist"**         `Especifica o diretório no qual os arquivos compilados serão gerados`
    **noEmitOnError": true**     `Não compila os arquivos enquanto houverem erros`
    **strict": true**            `Habilita todas as regras de tipagem`
    **modeResolution: node**     `Não me lembro exatamente o que faz, mas previne alguns erros` 

    # Dentro da opção "include":
    **include: ["app/**/*"]**     `Especifica o diretório onde estão os arquivos TypeScript que serão compilados`
    