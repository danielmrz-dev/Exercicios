console.log("Condicionais");

const listaDeDestinos = [`Salvador`, `São Paulo`, `Rio de Janeiro`];

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

listaDeDestinos.push(`Curitiba`);

listaDeDestinos.splice(1, 1);

console.log(listaDeDestinos);

const idade = 17;
const estaAcompanhada = true;

if (idade <= 18 && estaAcompanhada == true || idade > 18 && estaAcompanhada == false || idade > 18 && estaAcompanhada == true) {
    console.log("Comprador é maior de idade ou é um menor acompanhado.");
    console.log(`Aqui está a lista de destinos de viagem disponíveis: ${listaDeDestinos}`);
    listaDeDestinos.splice(1, 1);
} else {
    console.log(`Comprador menor de idade e desacompanhado. Não há destinos disponíveis.`);
}
