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

let contador = 0;

listaDeDestinos.push(`Maragogi`)

while (contador < listaDeDestinos.length) {
    if (listaDeDestinos[contador] == destino) {
        console.log(`O destino ${destino} está disponível.`)
        contador += 1;
    } else {
        console.log(`O destino ${destino} indisponível.`)
    }
}