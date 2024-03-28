const notas = [7, 7, 8, 9];
const novaNotas = [...notas, 7]

// Os tres pontos servem para trazer os itens do array original e colocá-los dentro dessa nova variável, transformando essa variavel em um CLONE do array original. Caso esse novo array seja alterado, isso não afeta o array original.

novaNotas.push(10)

console.log(notas);
console.log(novaNotas);