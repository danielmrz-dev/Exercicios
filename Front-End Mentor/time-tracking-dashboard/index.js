const timeframe = document.querySelectorAll(".dashboard__timeframe");
// let hours = document.querySelectorAll(".dashboard__hours");
const lastWeek = document.querySelectorAll(".dashboard__last-week");

function toggleActive(elemento) {
    timeframe.forEach((e) => e.classList.remove("active"));
    elemento.classList.add("active");
}

timeframe.forEach((elemento) => {
    elemento.addEventListener("click", () => {
        toggleActive(elemento);
    });
});

fetch("data.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (dados) {
        let hours = document.querySelector(".thirty");
        let out = "";
        for (let dado of dados) {
            out = `${dado.title}`;
        }
        hours.innerHTML = out;
    });
