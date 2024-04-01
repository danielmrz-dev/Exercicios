const alunos = require("./alunos.json");

// function filtrarPorPropriedade(lista) {
//     return lista.filter((aluno) => !aluno.endereco.cep)
// }

// const alunosSemCEP = filtrarPorPropriedade(alunos)

// console.log(alunosSemCEP);

function filtrarPorPropriedade(lista, propriedade) {
    return lista.filter((aluno) => {
        return !aluno.endereco.hasOwnProperty(propriedade);
    });
}

const enderecosIncompletos = filtrarPorPropriedade(alunos, "cep")

console.log(enderecosIncompletos);
