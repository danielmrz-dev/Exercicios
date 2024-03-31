const aluno = {
    nome: "Daniel Moraes",
    cpf: "40014305844",
    idade: 33,
    turma: "Javascript",
    bolsista: true,
    telefone: "779988774466",
    emails: ["daniel@daniel.com", "daniel2@daniel.com"],
    // enderecos: [
    //     {
    //         rua: "Tailandia",
    //         numero: "186",
    //         complemento: "apto 45",
    //         cidade: "Guarulhos",
    //     },
    //     {
    //         rua: "Sao Roque",
    //         numero: "133",
    //         complemento: "",
    //         cidade: "Guarulhos",
    //     },
    // ],
};

const valoresObjeto = Object.values(aluno);

console.log(valoresObjeto);

if (!valoresObjeto.includes("Daniel")) {
    console.error("É necessário ter um endereço cadastrado.");
}
