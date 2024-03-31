const aluno = {
    nome: "Daniel Moraes",
    cpf: "40014305844",
    idade: 33,
    turma: "Javascript",
    bolsista: true,
    telefone: "779988774466",
    emails: ["daniel@daniel.com", "daniel2@daniel.com"],
    enderecos: 
    [
        {
            rua: "Tailandia",
            numero: "186",
            complemento: "apto 45",
            cidade: "Guarulhos",
        }
    ]
};


aluno.enderecos.push(    {
    rua: "Sao Roque",
    numero: "133",
    complemento: "",
    cidade: "Guarulhos",
})


console.log(aluno.enderecos[0]);
console.log(aluno.enderecos[1]);

const listaEnderecosComComplemento = aluno.enderecos.filter((endereco) => endereco.complemento)

console.log(listaEnderecosComComplemento);