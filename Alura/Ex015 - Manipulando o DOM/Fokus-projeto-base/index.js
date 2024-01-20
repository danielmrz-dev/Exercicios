const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const image = document.querySelector('.app__image');
const title = document.querySelector('.app__title');
const destaque = document.querySelector('.app__title-strong');
const botoes = document.querySelectorAll('.app__card-button');
const startPause = document.getElementById('start-pause');
const startPauseText = document.querySelector('#start-pause span');
const startPauseImg = document.querySelector('.app__card-primary-butto-icon');
const timeOnScreen = document.getElementById('timer');

const audioPlay = new Audio('./sons/play.wav');
const audioPausa = new Audio('./sons/pause.mp3');
const audioTempoFinalizado = new Audio('./sons/beep.mp3');


const musicaFocoInput = document.getElementById('alternar-musica');
const musica = new Audio('./sons/luna-rise-part-one.mp3');
musica.loop = true;

let tempoDecorridoEmSegundos = 1500;

musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
});

focoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 1500
    alterarContexto('foco');    
    focoBt.classList.add('active');
});

curtoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active');
});

longoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 900
    alterarContexto('descanso-longo');
    longoBt.classList.add('active');
});

function alterarContexto(contexto) {
    mostrarTempo();
    botoes.forEach(function(contexto) {
        contexto.classList.remove('active');
    });

    html.setAttribute('data-contexto', contexto);
    image.setAttribute('src', `./imagens/${contexto}.png`);
    switch (contexto) {
        case "foco":
            title.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;

        case "descanso-curto":
            title.innerHTML = `Que tal dar uma respirada <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
            break;
            
            case 'descanso-longo':
            title.innerHTML = `Hora de voltar à superfície! <strong class="app__title-strong">Faça uma pausa longa!</strong>`;
            break;
    
        default:
            break;
        }
}

let intervaloId = null;

const contagemRegressiva = () => {
    if (tempoDecorridoEmSegundos <= 0) {
        audioTempoFinalizado.play();
        alert('Tempo finalizado!')
        zerar();
        return
    } else {
        
    }
    tempoDecorridoEmSegundos -= 1;
    mostrarTempo();
}

startPause.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
    if (intervaloId) {
        audioPausa.play();
        zerar();
        return
    }
    intervaloId = setInterval(contagemRegressiva, 1000);
    startPauseText.textContent = 'Pausar';
    startPauseImg.setAttribute('src', './imagens/pause.png')
    
}

function zerar() {
    clearInterval(intervaloId);
    startPauseText.textContent = 'Começar';
    startPauseImg.setAttribute('src', './imagens/play_arrow.png')
    intervaloId = null;
}

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'})
    timeOnScreen.innerHTML = `${tempoFormatado}`;
}

mostrarTempo();


















