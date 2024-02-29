const pessoas = [
    {
        nome: "Daniel",
        sexo: "Masculino",
        idade: 33,
        profissao: "Consultor Financeiro",
        estadoCivil: "Casado",
    },
    {
        nome: "João",
        sexo: "Masculino",
        idade: 25,
        profissao: "Engenheiro",
        estadoCivil: "Divorciado",
    },
    {
        nome: "Ana",
        sexo: "Feminino",
        idade: 30,
        profissao: "Astróloga",
        estadoCivil: "Casado",
    },
    {
        nome: "Florzina",
        sexo: "Feminino",
        idade: 70,
        profissao: "Aposentada",
        estadoCivil: "Viúva",
    },
    {
        nome: "Eni",
        sexo: "Feminino",
        idade: 50,
        profissao: "Artista",
        estadoCivil: "Solteira",
    },
    {
        nome: "Gercino",
        sexo: "Masculino",
        idade: 74,
        profissao: "Aposentado",
        estadoCivil: "Solteiro",
    },
    {
        nome: "Lucia",
        sexo: "Feminino",
        idade: 70,
        profissao: "Costureira",
        estadoCivil: "Solteira",
    },
    {
        nome: "David",
        sexo: "Masculino",
        idade: 43,
        profissao: "Motoboy",
        estadoCivil: "Casado",
    },
    {
        nome: "Sara",
        sexo: "Feminino",
        idade: 28,
        profissao: "Linda",
        estadoCivil: "Solteira",
    },
];

// O método MAP aplica uma instrução ou um grupo de instruções a todos os itens do array e retorna um novo array com os dados do array original modificados

// Nesse primeiro caso, o uso do return não é necessário, pois a instrução não está entre chaves {}.
const aumentarIdade = pessoas.map(pessoa => pessoa.idade += 5)
console.log(aumentarIdade)

// Nesse segundo caso, o uso do return é necessário, pois o resultado do conjunto de instruções que está entre chaves não será inferido automticamente ao novo array
const mudarDados = pessoas.map((pessoa) => {
    pessoa.localizacao = 'Dubai';
    pessoa.pontos = Math.floor(Math.random() * 100)
    return pessoa // uso do return sendo necessário
})

console.log(mudarDados)
