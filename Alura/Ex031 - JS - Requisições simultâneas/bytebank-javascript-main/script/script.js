import selecionaCotacao from "./imprime-cotacao.js";

const graficoDolar = document.getElementById("graficoDolar");

const graficoParaDolar = new Chart(graficoDolar, {
    type: "line",
    data: {
        labels: [],
        datasets: [
            {
                label: "Dolar",
                data: [],
                borderWidth: 1,
            },
        ],
    },
});

setTimeout(() => setInterval(() => removerDados(graficoParaDolar), 5000), 60000)

// async function conectaAPI() {
//     const conecta = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
//     const conectaTraduzido = await conecta.json();
//     let tempo = geraHorario();
//     let valor = conectaTraduzido.USDBRL.ask;
//     adicionarDados(graficoParaDolar, tempo, valor);
//     selecionaCotacao("dólar", valor);
// }

function geraHorario() {
    const data = new Date();
    const horario = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
    console.log(horario);
    return horario;
}

function adicionarDados(grafico, legenda, dados) {
    grafico.data.labels.push(legenda);
    grafico.data.datasets.forEach((dataset) => {
        dataset.data.push(dados);
    });
    grafico.update();
}

function removerDados(grafico) {
    grafico.data.labels.shift();
    grafico.data.datasets.forEach((dataset) => {
        dataset.data.shift();
    });
    grafico.update();
};

let workerDolar = new Worker('./script/workers/workerDolar.js');

workerDolar.postMessage("usd");

workerDolar.addEventListener("message", event => {
    let tempo = geraHorario();
    let valor = event.data.ask;
    selecionaCotacao("dolar", valor);
    adicionarDados(graficoParaDolar, tempo, valor);
})

const graficoIene = document.getElementById("graficoIene");
const graficoParaIene = new Chart(graficoIene, {
    type: "line",
    data: {
        labels: [],
        datasets: [
            {
                label: "Iene",
                data: [],
                borderWidth: 1,
            },
        ],
    },
})


let workerIene = new Worker('./script/workers/workerIene.js');
workerIene.postMessage("iene");

workerIene.addEventListener("message", event => {
    let tempo = geraHorario();
    let valor = event.data.ask;
    adicionarDados(graficoParaIene, tempo, valor);
    selecionaCotacao("iene", valor);
})
