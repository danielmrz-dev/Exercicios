"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const form = document.querySelector("#search-form > form");
const input = document.querySelector("#input-localizacao");
const sectionTempoInfo = document.querySelector("#tempo-info");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (evento) => __awaiter(void 0, void 0, void 0, function* () {
    evento.preventDefault();
    if (!input || !sectionTempoInfo)
        return;
    const localizacao = input.value;
    if (localizacao.length < 3) {
        alert("A localização precisa ter no mínimo 3 caracteres");
        return;
    }
    try {
        const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=34872b73b988ec1e7923f4e267f00463&lang=pt_bt&units=metric`);
        const dados = yield response.json();
        const infos = {
            icone: `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`,
            temperatura: Math.round(dados.main.temp),
            local: dados.name
        };
        sectionTempoInfo.innerHTML = `
            <div class="tempo-data">
                <h2 id="local">${infos.local}</h2>
                <span id="temperatura">${infos.temperatura}ºC</span>
            </div>
    
            <img src=${infos.icone} id="icone">
        `;
    }
    catch (error) {
        console.log("Houve um erro na obtenção dos dados da API:", error);
    }
}));
