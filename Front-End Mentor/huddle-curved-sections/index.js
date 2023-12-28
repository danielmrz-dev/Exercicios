const email = document.querySelector('.newsletter-input')

function validaEmail(email) {
    const re =  /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}

function subscribe() {
    if (validaEmail(email.value) == false) {
        alert('Please provide a valid email!')
        email.focus();
    } else {
        alert('Thank you for your subscription! 😊')
        email.value = '';
    }
}