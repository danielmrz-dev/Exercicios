const aluno = {
    nome: "Daniel Moraes",
    cpf: "40014305844",
    idade: 33,
    turma: "Javascript",
    bolsista: true,
    telefone: "779988774466",
    media: 7.5,
    estaAprovado: function (mediaBase) {
        return this.media >= mediaBase ? true : false;
    },
};

console.log(aluno.estaAprovado(6));
