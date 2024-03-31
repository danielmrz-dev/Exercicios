const estudante = require("./aluno.json");

const stringEstudante = JSON.stringify(estudante)

console.log(stringEstudante);
console.log(typeof stringEstudante);

const objEstudante = JSON.parse(stringEstudante);
console.log(objEstudante);
console.log(typeof objEstudante);