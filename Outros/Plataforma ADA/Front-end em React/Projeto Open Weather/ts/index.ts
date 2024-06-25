const form = document.querySelector("#search-form > form");
const input: HTMLInputElement | null = document.querySelector("#input-localizacao");
const sectionTempoInfo: HTMLElement | null = document.querySelector("#tempo-info");

form?.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    
    if (!input || !sectionTempoInfo) return

    const localizacao = input.value;

    if (localizacao.length < 3) {
        alert("A localização precisa ter no mínimo 3 caracteres");
        return;
    }
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=34872b73b988ec1e7923f4e267f00463&lang=pt_bt&units=metric`)
    const dados = await response.json();
    
    const infos = {
        icone: `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`,    
        temperatura: Math.round(dados.main.temp),
        local: dados.name
    }

    sectionTempoInfo.innerHTML = `
        <div class="tempo-data">
            <h2 id="local">${infos.local}</h2>
            <span id="temperatura">${infos.temperatura}ºC</span>
        </div>

        <img src=${infos.icone} id="icone">
    `
    
})
