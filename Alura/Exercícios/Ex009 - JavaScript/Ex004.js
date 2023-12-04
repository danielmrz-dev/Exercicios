console.log('Conversão de tipos de variáveis');

console.log("2" + "2");
console.log(parseInt("2") + parseInt("2"));

// parseInt converte uma STRING em NUMBER

console.log("10" / "2");
// Em casos em que são 2 números como STRINGS, O Javascript interpreta automaticamente, já que divisão só faz sentido com números

console.log("Daniel" / "2");
// Nesse caso, não tem como dividir uma palavra por um número, então ele retorna NaN = Not A Number

console.log(6.5) 
// Números não inteiros: Usar ponto, não usar vírgulas