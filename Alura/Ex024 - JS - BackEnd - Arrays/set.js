const nomes = ["Ana", "Daniel", "Daniel", "Bilu", "Bilu", "Foggy"];

// Um SET é um conjunto de dados "Array-like", mas não é um array. Os métodos de array não funcionam em um SET.

const nomesSemRepeticao = new Set(nomes);

// Para usar os métodos de array, precisamos transformar o conjunto de dados em um array usando o SPREAD OPERATOR (Os tres pontinhos)
const arrayNomesSemRepeticao = [...nomesSemRepeticao]

const outraManeiraDeFAzerIsso = [...new Set(nomes)] // Refatorado

console.log(nomesSemRepeticao);
console.log(arrayNomesSemRepeticao);
console.log(outraManeiraDeFAzerIsso);
