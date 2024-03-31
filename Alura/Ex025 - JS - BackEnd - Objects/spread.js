const aluno = {
    nome: "Daniel Moraes",
    cpf: "40014305844",
    idade: 33,
    turma: "Javascript",
    bolsista: true,
    telefone: "779988774466",
    emails: ["daniel@daniel.com", "daniel2@daniel.com"],
    enderecos: [
        {
            rua: "Tailandia",
            numero: "186",
            complemento: "apto 45",
            cidade: "Guarulhos",
        },
        {
            rua: "Sao Roque",
            numero: "133",
            complemento: "",
            cidade: "Guarulhos",
        },
    ],
};

function exibirEmails(email1, email2) {
    console.log(`Enviar email para ${email1}.`);
    console.log(`Enviar email para ${email2}.`);
}

// exibirEmails(...aluno.emails);

const dadosEnvio = {
    destinatario: aluno.nome,
    ...aluno.enderecos[0]
};

console.log(dadosEnvio)
