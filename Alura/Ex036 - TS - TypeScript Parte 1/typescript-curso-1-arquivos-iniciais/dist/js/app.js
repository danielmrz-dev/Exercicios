import { Negociacao } from "./models/negociacao.js";
const negociacao = new Negociacao(new Date(), 10, 200);
console.log(negociacao.valor);
