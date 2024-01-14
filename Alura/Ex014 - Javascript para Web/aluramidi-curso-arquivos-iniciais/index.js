const pom = document.querySelector('#som_tecla_pom');    

function tocaSomPom() {
    pom.play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;

