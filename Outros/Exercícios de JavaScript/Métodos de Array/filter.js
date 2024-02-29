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
        idade: 16,
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

// O método FILTER aplica um filtro ou um conjunto de filtros a um array e devolve um novo array com os itens que correspondem àquele filtro

// Exemplo com um único filtro:
const mulheres = pessoas.filter(pessoa => pessoa.sexo == "Feminino")
console.log(mulheres)

// Exemplo com mais de um filtro usando &&
const homensMaioresDeIdade = pessoas.filter(pessoa => pessoa.sexo == "Masculino" && pessoa.idade >= 18)
console.log(homensMaioresDeIdade)

// Exemplo com dois filtros e com o uso do return (ao contrário do método MAP, o uso do return vem ANTES da comparação no filter, não ao final das instruções)
const aposentados = pessoas.filter((pessoa) => {
    return pessoa.profissao == "Aposentado" || pessoa.profissao == "Aposentada";
})
console.log(aposentados)

