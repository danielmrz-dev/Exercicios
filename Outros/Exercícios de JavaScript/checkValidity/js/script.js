const camposDoFormulario = document.querySelectorAll(".form-data");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", verificaCampo(campo));
    campo.addEventListener("invalid", (evento) => evento.preventDefault());
})

function verificaCampo(campo) {
    if (campo.name === "nome" && campo.value.length != 0) {
        validaNome(campo)
    }
    if (campo.name === "aniversario" && campo.value.length != "") {
        validaIdade(campo)
    }
    if (campo.name === "cpf" && campo.value.length >= 11) {
        validaCPF(campo)
    }
    if (campo.name === "email" && campo.value.length >= 4) {
        validaEmail(campo)
    }
    if (campo.name === "senha" && campo.value.length >= 0) {
        validaSenha(campo)
    }    
}


