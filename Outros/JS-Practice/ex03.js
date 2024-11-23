"3. Par ou Ímpar: Peça um número ao usuário e exiba se ele é par ou ímpar."

function parOuImpar(numero) {
    const par = numero % 2 === 0
    return par ? `O número ${numero} é par.` : `O número ${numero} é ímpar.`
}

console.log(parOuImpar(2549));



