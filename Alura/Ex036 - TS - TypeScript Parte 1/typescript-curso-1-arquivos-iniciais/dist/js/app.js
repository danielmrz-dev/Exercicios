import { NegociacaoController } from "./controllers/nerociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector(".form");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    controller.adiciona();
});
