// let contador = 0;

// let intervalo = setInterval(() => {
//     console.log(contador)
//     if (contador >= 10) {
//         clearInterval(intervalo)
//     }
//     contador++
// }, 1000);

const timer = document.querySelector(".timer");

timer.innerHTML = 60;

let intervalo = setInterval(() => {
    timer.innerHTML -= 1;
    if (timer.innerHTML <= 0) {
        clearInterval(intervalo);
    }
}, 200);
