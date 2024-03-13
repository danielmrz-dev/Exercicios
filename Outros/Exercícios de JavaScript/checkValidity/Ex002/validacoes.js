import validaNome from "./valida-nome.js"

const input = document.querySelectorAll("input")
const mensagemDeErro = document.querySelector(".mensagem-de-erro")
const submitBtn = document.querySelector("button")

const mensagens = {
    nome: {
        tooShort: "Nome muito curto!",
        tooLong: "Nome muito longo!",
        valueMissing: "O campo nome não pode ficar vazio!",
    },
}

const tiposDeErro = [
    "tooShort",
    "tooLong",
    "valueMissing"
]



// input.addEventListener("blur", () => validaNome())
// input.addEventListener("invalid", (evento) => evento.preventDefault())

// function validaNome() {
//     let mensagem = "";
//     tiposDeErro.forEach((erro) => {
//         if (input.validity[erro]) {
//             mensagem = mensagens[input.name][erro];            
//         }
//     })
    
//     const validadorDeInput = input.checkValidity();

//     if (!validadorDeInput) {
//         mensagemDeErro.innerText = mensagem        
//     } else {
//         mensagemDeErro.innerText = "";        
//     }
// }
