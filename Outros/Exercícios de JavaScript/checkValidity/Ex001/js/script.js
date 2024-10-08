import validaCPF from "./validaCPF.js";

const camposDoFormulario = document.querySelectorAll(".form-data");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
});

const tiposDeErro = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooShort",
    "customError",
];

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido.",
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido.",
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes.",
    },
    cpf: {
        valueMissing: "O campo de CPF não pode estar vazio.",
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes.",
    },
    aniversario: {
        valueMissing: "O campo de data de nascimento não pode estar vazio.",
        customError: "Você deve ser maior que 18 anos para se cadastrar.",
    },
    termos: {
        valueMissing: "Você deve aceitar nossos termos antes de continuar.",
    },
};

function verificaCampo(campo) {
    let mensagem = "";
    if (campo.name === "cpf" && campo.value.length >= 11) {
        validaCPF(campo);
    }

    tiposDeErro.forEach((erro) => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
            console.log(campo.name[erro])
        }
    });

    let mensagemDeErro = campo.parentNode.querySelector(".validation-msg");
    const iconeDeErro = campo.parentNode.querySelector(".icon-error");
    const validadorDeInput = campo.checkValidity();

    if (!validadorDeInput) {
        mensagemDeErro.innerText = mensagem;
        iconeDeErro.style.display = "block";
    } else {
        mensagemDeErro.textContent = "";
        iconeDeErro.style.display = "none";
    }
}
