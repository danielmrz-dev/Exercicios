const nome = document.querySelector('[data-nome]')
const sobrenome = document.querySelector('[data-sobrenome]')
const email = document.querySelector("[data-email]");
const mensagem = document.querySelector("[data-mensagem]");
const radioInputs = document.querySelectorAll('input[type="radio"]');
const consentimento = document.querySelector("[data-consentimento]")
const submitBtn = document.querySelector("[data-submit]");

radioInputs.forEach((input) => {
    input.addEventListener("focus", () => {
        const background = input.closest(".form__query-type-containers");
        background.classList.add("green-bg");
    });
    input.addEventListener("blur", () => {
        const background = input.closest(".form__query-type-containers");
        background.classList.remove("green-bg");
    });
});

function validaInputTexto(input) {
    const erro = input.closest(".parent").querySelector(".form__error-msg");
    if (input.value == "") {
        erro.style.opacity = "1";
    } else {
        erro.style.opacity = "0";
    }
}

function validarEmail(email) {
    var padrao = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    // return padrao.test(email);
    const erro = email.closest(".parent").querySelector(".form__error-msg");
    if (padrao.test(email.value) === false) {
        erro.style.opacity = "1";
    } else {
        erro.style.opacity = "0";        
    }
}

function validaQueryType() {
    const selectedQueryType = document.querySelector('input[type="radio"]:checked')
    const erro = document.querySelector(".query-error")
    if (!selectedQueryType) {
        erro.style.opacity = "1";
    } else {
        erro.style.opacity = "0";
    } 
}

function validaConsentimento(input) {
    const erro = input.closest(".parent").querySelector(".form__error-msg");
    if (!input.checked) {
        erro.style.opacity = "1";
    } else {
        erro.style.opacity = "0";        
    }
    
    
}

submitBtn.addEventListener("click", function(evento) {
    evento.preventDefault();
    console.log(validaInputTexto(nome.value));
    console.log(validaInputTexto(sobrenome.value));
    console.log(validarEmail(email.value));    
    console.log(validaQueryType(radioInputs));
    console.log(validaInputTexto(mensagem.value));    
    console.log(validaConsentimento(consentimento));
});
