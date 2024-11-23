"Operações matemáticas: Crie um programa que adicione, subtraia, multiplique e divida dois números."

function calcula(a, b, operacao) {
    const operacoes = {
        "+": a + b,
        "-": a - b,
        "/": a / b,
        "*": a * b,
    }
    return operacoes[operacao]
}

const resultado = calcula(23, 2654, "+").toFixed(2)

console.log(resultado);
