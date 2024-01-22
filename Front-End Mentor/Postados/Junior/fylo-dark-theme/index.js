const emailInput = document.querySelector('.call-to-action__input');
const submitBtn = document.querySelector('.call-to-action__button');

function validaEmail(email) {
    const re =  /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}

submitBtn.addEventListener('click', () => {
    if (emailInput.value.length == 0 || validaEmail(emailInput.value) == false) {
        alert('Please provide a valid email address!');
        emailInput.focus();        
        emailInput.classList.add('active');
    } else {
        alert('Thank you for your subscription! 😊');
        emailInput.value = '';
        emailInput.classList.remove('active');
    }
})