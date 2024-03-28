// const salaJS = [9, 10, 3.5, 4, 10, 8, 7];
// const salaPython = [8, 7, 6, 5, 4, 10, 9, 10];
// const salaCSharp = [7, 9, 3, 8, 5];

// function calculaMedia(listaDeNotas) {
//     const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => acumulador + nota, 0);

//     const media = somaDasNotas / listaDeNotas.length;
//     return media.toFixed(2);
// }

// console.log(calculaMedia(salaJS)); 
// console.log(calculaMedia(salaPython)); 
// console.log(calculaMedia(salaCSharp)); 


const numeros = [1,2,3,4,5,6,9,7,8,4,1,2,5,6,9,4,4,8,9,6,3]

const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0)

console.log(soma);