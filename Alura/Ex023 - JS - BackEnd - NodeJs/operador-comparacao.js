const estaAprovado = true;

// if (estaAprovado === true) {
//     console.log("Está aprovado!");
// } else {
//     console.log("Está reprovado!");
// }

// if (0 === "0") {
//     console.log("passou na comparação");
// } else {
//     console.log("não passou na comparação");
// }

// const idadeMinima = 18;
// const idadeEstudante = 16;

// const texto =
//     idadeEstudante >= idadeMinima
//         ? "Não precisa de autorização."
//         : "Precisa de autorização.";

// console.log(texto);

let matriculaAtiva = false;

function verificaMatricula() {
    return matriculaAtiva === true ? "Matricula ativa" : "Matricula não está ativa"
}

console.log(verificaMatricula());
