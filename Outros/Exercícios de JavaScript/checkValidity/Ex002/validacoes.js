const inputs = document.querySelectorAll("input")
const submitBtn = document.querySelector("button")

const mensagens = {
    nome: {
        tooShort: "Nome muito curto!",
        tooLong: "Nome muito longo!",
        valueMissing: "O campo nome não pode ficar vazio!",
    },
    rg: {
        tooShort: "RG curto!",
        tooLong: "RG longo!",
        valueMissing: "O campo RG não pode ficar vazio!",
    },
    cpf: {
        tooShort: "CPF curto!",
        tooLong: "CPF longo!",
        valueMissing: "O campo CPF não pode ficar vazio!",
    },
}

const tiposDeErro = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooShort",
    "customError",
];

inputs.forEach((campo) => {
    campo.addEventListener("blur", () => validaCampo(campo));
    campo.addEventListener("invalid", (evento) => evento.preventDefault());
})

function validaCampo(campo) {
    let mensagem = "";
    tiposDeErro.forEach((erro) => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
        }
    })

    const mensagemErro = campo.parentNode.querySelector(".mensagem-de-erro");
    const validadorDeInput = campo.checkValidity();
    
    if (!validadorDeInput) {
        mensagemErro.innerText = `${mensagem}`
    } else {
        mensagemErro.innerText = "";
    }
}