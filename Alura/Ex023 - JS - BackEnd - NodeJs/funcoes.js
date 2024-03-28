// parâmetros ou argumentos
// retorno

function exibeInfosEstudante(nome, nota) {
    console.log(`O nome é ${nome} e sua nota foi ${nota}.`);
}

// exibeInfosEstudante("Ana", 10);

// ------------------------------------------------------------

function exibeEstudante(nome, nota) {
    return `O nome é ${nome} e sua nota foi ${nota}.`;
}

// console.log(exibeEstudante("Daniel", 10))

// ------------------------------------------------------------

function somaNumeros(a, b) {
    return a + b;
}

const resultado = somaNumeros(5, 9);

// console.log(resultado);

// ------------------------------------------------------------

function ehPalindromo(palavra) {
    if (palavra === palavra.split("").reverse().join("")) {
        return `A palavra ${palavra} é um palíndromo!`;
    } else {
        return `A palavra ${palavra} não é um palíndromo!`;
    }
}

console.log(ehPalindromo("reviver"));
console.log(ehPalindromo("Natal"));
