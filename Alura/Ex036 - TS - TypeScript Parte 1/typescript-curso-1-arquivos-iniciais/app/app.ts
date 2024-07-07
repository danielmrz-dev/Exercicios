import { Negociacao } from "./models/negociacao.js";
import { NegociacaoController } from "./controllers/nerociacao-controller.js";

const controller = new NegociacaoController();

const form = document.querySelector(".form");
form?.addEventListener("submit", (evento) => {
    evento.preventDefault();
    controller.adiciona();
})
