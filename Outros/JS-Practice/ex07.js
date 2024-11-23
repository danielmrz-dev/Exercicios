"7. Maior número: Crie uma função que receba três números e retorne o maior deles."

function retornaMaiorNumero(n1, n2, n3) {
    const maior = Math.max(n1, n2, n3)
    return `O maior número é ${maior}.`
}

console.log(retornaMaiorNumero(90,120,15));
