const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

pincel.fillStyle = 'Lightgrey';
pincel.fillRect(0, 0, 600, 400);

let raio = 10
var eixoX;
var eixoY;

function desenhaCirculo(x, y, raio, cor) {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}


function limpaTela() {
    pincel.clearRect(0, 0, 600, 400);    
}

function desenhaAlvo(x, y) {
    desenhaCirculo(x, y, raio+20, 'red');
    desenhaCirculo(x, y, raio+10, 'white');
    desenhaCirculo(x, y, raio, 'red');    
}

function sorteiaPosicao(maximo) {
    return Math.floor(Math.random()*maximo);
}

function gerarAlvo() {
    limpaTela();
    eixoX = sorteiaPosicao(600);
    eixoY = sorteiaPosicao(400);    
    desenhaAlvo(eixoX, eixoY);
}

setInterval(gerarAlvo, 1000)

function dispara(evento) {
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;
    if ((x > eixoX - raio)
        && (x < eixoX + raio) 
        && (y > eixoY - raio) 
        && (y < eixoY + raio)) {
        alert('Acertou!')
    }
}

tela.onclick = dispara;
















