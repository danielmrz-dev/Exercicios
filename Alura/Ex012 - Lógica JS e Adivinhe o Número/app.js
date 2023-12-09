let numeroSecreto = gerarAleatorio();
let limite = gerarAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secreto')
exibirTextoNaTela('p', `Escolha um número entre 1 e ${limite}:`)

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        alert('Acertou!');
    } else {
        alert('Errou!');     
    }

    // alert(numeroSecreto);
}

function gerarAleatorio() {
    return parseInt(Math.random() * 1000 + 1);     
}