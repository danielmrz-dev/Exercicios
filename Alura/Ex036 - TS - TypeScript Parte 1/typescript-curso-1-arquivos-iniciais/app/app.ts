import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const form = document.querySelector(".form") as HTMLFormElement;

form.addEventListener("submit", evento => {
    evento.preventDefault();
    controller.adiciona();
})