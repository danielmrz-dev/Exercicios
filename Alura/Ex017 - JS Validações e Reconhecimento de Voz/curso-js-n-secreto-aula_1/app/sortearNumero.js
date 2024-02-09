const menorValor = 1;
const maiorValor = 1000;

const menorValorTela = document.getElementById('menor-valor');
const maiorValorTela = document.getElementById('maior-valor');

menorValorTela.innerHTML = menorValor
maiorValorTela.innerHTML = maiorValor

const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);    
}

console.log(numeroSecreto);

