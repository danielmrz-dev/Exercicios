const aluno = {
    nome: "Daniel Moraes",
    cpf: "40014305844",
    idade: 33,
    turma: "Javascript",
};

function exibeInfoEstudante(aluno, infoEstudante) {
    return aluno[infoEstudante];
}

console.log(aluno['nome']);

// console.log(exibeInfoEstudante(aluno, "nome"));
// console.log(exibeInfoEstudante(aluno, "cpf"));
