
let contador = 0;

let intervalo = setInterval(() => {
    console.log(contador)
    if (contador >= 10) {
        clearInterval(intervalo)
    }
    contador++
}, 1000);


