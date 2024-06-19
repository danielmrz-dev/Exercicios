"use strict";
//* Inferência de tipo --------------------------------------------------------------------------------------------------------------------
let numero = 10;
const pi = 3.1415;
let resultado = numero * pi;
//* Atribuições de tipo --------------------------------------------------------------------------------------------------------------------
let nome = "Daniel";
let correta;
let n1 = 2;
//* Arrays ---------------------------------------------------------------------------------------------------------------------------------
const numeros = [1, 2, 2, 3, 4, 5];
const misto = ["Dan", 2, true]; //! NÃO É RECOMENDADO FAZER UNIÃO DE TIPOS EM ARRAYS
//+ Exemplo de inferência de tipo em funções de alta ordem (filter, map, reduce)
const idades = [];
idades.push(38);
idades.push(14);
idades.push(9);
const menores = idades.filter((idade) => idade < 18);
console.log(menores);
//? Tipando uma TUPLA (Um array que sempre terá uma mesma quantidade de elementos, como uma string seguida de um número)
const pessoaTupla = ["Daniel", 33];
const pessoa1 = {
    nome: "Daniel",
    idade: 33,
    sonho: "comprar uma pousada",
    altura: 1.8,
};
const pessoa2 = {
    nome: "Ana",
    idade: 30,
    altura: 1.68,
    //! Este objeto do tipo Person não possui a propriedade "sonho", pois ela não é obrigatória.
};
const pessoa3 = {
    nome: "Ana",
    idade: 33,
    // sonho: "Ser rica",
    altura: 1.68,
};
function getNumber(n1, n2, criterio) {
    switch (criterio) {
        case "greater":
            return n1 > n2 ? n1 : n2;
        case "lower":
            return n1 < n2 ? n1 : n2;
        default:
            const numeroAleatorio = Math.random();
            if (numeroAleatorio >= 0.5)
                return n1;
            return n2;
    }
}
const numeroEscolhido = getNumber(10, 20);
console.log(numeroEscolhido);
//* Tipando funções -------------------------------------------------------------------------------------------------------------------------
function soma(n1, n2) {
    return n1 + n2;
}
function hello() {
    console.log("Hello");
}
const pessoas = {
    "123.456.789-88": {
        nome: "Daniel",
        idade: 33,
        altura: 1.89
    }
};
