const alunos = require("./alunos.json");

// console.log(alunos);

function encontraAluno(lista, chave, valor) {
    return lista.find((aluno) => aluno[chave].includes(valor));
}

const estudanteEncontrado = encontraAluno(alunos, "nome", "Amye");
console.log(estudanteEncontrado);

const estudanteEmail = encontraAluno(alunos, "email", "aranahan2@yellowbook.com");
console.log(estudanteEmail);






