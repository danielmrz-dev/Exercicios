console.log("Condicionais");

const listaDeDestinos = [`Salvador`, `São Paulo`, `Rio de Janeiro`];

console.log("Destinos possíveis: \n");
console.log(listaDeDestinos);

listaDeDestinos.push(`Curitiba`);

// listaDeDestinos.splice(1, 1);

console.log(listaDeDestinos);

const idade = 17;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = 'Salvador';

const podeComprar = idade <= 18 && estaAcompanhada == true || idade > 18 && estaAcompanhada == true;


listaDeDestinos.push(`Maragogi`)

let destinoDisponivel = false;

for (let contador = 0;  contador < listaDeDestinos.length; contador++) {
    if (listaDeDestinos[contador] == destino) {
    destinoDisponivel = true;
    break;
}
}

console.log(`Destino existe: ${destinoDisponivel}`);

if (podeComprar && destinoDisponivel) {
    console.log('Boa viagem!')
} else {
    console.log('Desculpe, tivemos um erro!')
    
}