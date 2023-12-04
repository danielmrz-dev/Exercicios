console.log('Condicionais')

const listaDeDestinos = [`Salvador`, `São Paulo`, `Rio de Janeiro`];

console.log('Destinos possíveis:');
console.log(listaDeDestinos);

listaDeDestinos.push(`Curitiba`);

listaDeDestinos.splice(1,1)

console.log(listaDeDestinos);

const idade = 15

if (idade >= 18) {
    console.log('Comprador é maior de idade')
    console.log(`Aqui está a lista de destinos de viagem disponíveis: ${listaDeDestinos}`)
} else {
    console.log(`Comprador menor de idade. Não há destinos disponíveis.`)
}

