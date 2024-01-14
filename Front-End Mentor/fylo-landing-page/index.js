const email01 = document.querySelector('.main-email-input');
const email02 = document.querySelector('.cta-email-input');


function validaEmail(email) {
    const re =  /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}

function subscribe(field) {
    if (validaEmail(field.value) == false) {
        alert('Please provide a valid email!')
        field.focus();
    } else {
        alert('Thank you for your subscription! 😊')
        field.value = '';
    }
}