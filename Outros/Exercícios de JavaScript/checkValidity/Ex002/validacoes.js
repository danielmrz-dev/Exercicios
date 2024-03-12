const titulo = document.querySelector(".titulo")
const input = document.querySelector("#nome")
const mensagemDeErro = document.querySelector(".mensagem-de-erro")

const mensagens = {
    nome: {
        tooShort: "Digite mais caracteres",
        tooLong: "Digite menos caracteres",
        valueMissing: "Digite algo",
    },
}

const tiposDeErro = [
    "tooShort",
    "tooLong",
    "valueMissing"
]

input.addEventListener("blur", () => validaNome())
input.addEventListener("invalid", (evento) => evento.preventDefault())

function validaNome() {
    let mensagem = "";
    tiposDeErro.forEach((erro) => {
        if (input.validity[erro]) {
            mensagem = mensagens[input.name][erro];            
        }
    })
    
    const validadorDeInput = input.checkValidity();

    if (!validadorDeInput) {
        mensagemDeErro.innerText = mensagem        
    } else {
        mensagemDeErro.innerText = "";        
    }
}
