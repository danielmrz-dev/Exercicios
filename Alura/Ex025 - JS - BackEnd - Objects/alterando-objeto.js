const aluno = {
    nome: "Daniel Moraes",
    cpf: "40014305844",
    idade: 33,
    turma: "Javascript",
};

console.log(aluno.telefone); // Output = undefined, pois essa propriedade não existe

aluno.telefone = 987437355;

console.log(aluno);

const aluno2 = {};

aluno2.nome = "Daniel";
aluno2.pet = "Bilu";

console.log(aluno2);

// delete aluno2["nome"];
delete aluno2.nome

console.log(aluno2);

