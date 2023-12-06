console.log('Trabalhando com listas');

// const salvador =  `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

// const listaDeDestinos = [`Salvador`, `São Paulo`, `Rio de Janeiro`];

console.log('Destinos possíveis:');
console.log(listaDeDestinos);

listaDeDestinos.push(`Curitiba`);

console.log(listaDeDestinos);

listaDeDestinos.splice(0,1) 
// SPLICE remove itens do array. O primeiro número é onde a posição onde a remoção começa e o segundo número é a quantidade de itens a serem removidos

console.log(listaDeDestinos)
console.log(listaDeDestinos[2], listaDeDestinos[1])



