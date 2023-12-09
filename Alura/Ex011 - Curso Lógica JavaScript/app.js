alert('Bem vindo ao jogo do número secreto! 😊');
let limite = parseInt(Math.random()*10000);
let numeroSecreto = parseInt(Math.random() * limite + 1);
let chute = '';
let tentativas = 1

while (chute != numeroSecreto) {
    chute = prompt(`Digite um número de 0 a ${limite}:`);
    if (chute == numeroSecreto) {
        break;
    } else { 
        if (numeroSecreto < chute) {
        alert(`Você errou! Tente um número MENOR.`);
    } else {
        alert(`Você errou! Tente um número MAIOR.`);
    } tentativas++ 
    }   
}

frase = tentativas > 1 ? `Você fez ${tentativas} tentativas!` : `Você fez apenas 1 tentativa!`

alert(`Você ganhou! O número secreto era ${numeroSecreto}. ${frase}!`)    





