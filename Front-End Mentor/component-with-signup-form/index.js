const forms = [];
const errorMsg = [];
const iconError = [];

for (let i = 1; i <= 4; i++) {
    forms.push(document.getElementById(`form${i}`));
    errorMsg.push(document.getElementById(`msg${i}`));    
    iconError.push(document.getElementById(`iconError${i}`));    
}

forms[0].focus();

function testEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validarNome() {
    if (forms[0].value.length == 0) {
        iconError[0].style.display = 'block';
        errorMsg[0].style.display = 'block';
    } else {
        iconError[0].style.display = '';
        errorMsg[0].style.display = '';        
    }
}

function validarSobrenome() {
    if (forms[1].value.length == 0) {
        iconError[1].style.display = 'block';
        errorMsg[1].style.display = 'block';
    } else {
        iconError[1].style.display = '';
        errorMsg[1].style.display = '';        
    }
}

function validarEmail() {
    if (testEmail(forms[2].value) == false || testEmail(forms[2].value.length == 0)) {
        iconError[2].style.display = 'block';
        errorMsg[2].style.display = 'block';
    } else {
        iconError[2].style.display = '';
        errorMsg[2].style.display = '';        
    }  
}

function validarSenha() {
    if (forms[3].value.length == 0) {
        iconError[3].style.display = 'block';
        errorMsg[3].style.display = 'block';
    } else {
        iconError[3].style.display = '';
        errorMsg[3].style.display = '';        
    }
}

function validar() {
    validarNome();
    validarSobrenome();
    validarEmail();
    validarSenha();
    if (forms[0].value.length > 0 && forms[1].value.length > 0 && forms[2].value.length > 0 && forms[3].value.length > 0 && testEmail(forms[2].value) == true) {
        alert('Successful subscription! Thank you! 😊')
        iconError.style.display = '';
        errorMsg.style.display = '';   
    }      
}

