const aluno = {
    nome: "Daniel Moraes",
    cpf: "40014305844",
    idade: 33,
    turma: "Javascript",
    bolsista: true,
    telefone: "779988774466",
    media: 7.5,
    apresentar: function () {
        console.log(`O nome deste aluno(a) é ${this.nome}, o CPF deste aluno(a) é ${this.cpf}, ela(a) tem ${this.idade} anos e é da turma de ${this.turma}.`);
    },
};

aluno.apresentar()

// O this referencia o objeto ao qual ele faz parte