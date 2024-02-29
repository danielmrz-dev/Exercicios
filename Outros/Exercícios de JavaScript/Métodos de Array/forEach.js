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

pessoas.forEach((pessoa) => {
    pessoa.localizacao = "São Paulo";
    pessoa.renda = (2500).toLocaleString("pt-br", { style: "currency", currency: "BRL"});
});

console.log(pessoas)

// ForEach aplica uma instrução ou um conjunto de instruções a todos os itens do array

