const email = document.querySelector('input.email');
const subscribe = document.querySelector('input.subscribe');
const errorMsg = document.querySelector('p.error-msg');
const text = document.querySelector('section.text');
const success = document.querySelector('div.success-message');
const givenEmail = document.querySelector('strong.given-email');
const main = document.querySelector('main.container');

function validar(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validarEmail() {
    if (validar(email.value) == false || email.value.length == 0) {
        errorMsg.style.display = 'block';
        email.style.background = '#ff625730';
        email.focus();
    } else {
        success.style.display = 'grid';
        main.style.display = 'none';
        givenEmail.innerHTML = `${email.value}`
    }
}

function dismiss() {
    success.style.display = 'none';
    main.style.display = '';
    errorMsg.style.display = '';
    email.style.background = '';
    email.value = '';
    email.focus();
}












