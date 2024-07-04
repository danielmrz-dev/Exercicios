"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const negociacao_js_1 = require("./models/negociacao.js");
const negociacao = new negociacao_js_1.Negociacao(new Date(), 10, 200);
console.log(negociacao.valor);
