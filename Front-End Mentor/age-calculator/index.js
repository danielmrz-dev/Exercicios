const data = new Date();
anoAtual = data.getFullYear();
mesAtual = data.getMonth();
diaAtual = data.getDate();

const diaNascimento = document.querySelector('.input-day');
const mesNascimento = document.querySelector('.input-month');
const anoNascimento = document.querySelector('.input-year');

const textDay = document.querySelector('.text-day');
const textMonth = document.querySelector('.text-month');
const textYear = document.querySelector('.text-year');

const erroDia = document.getElementById('error-Day');
const erroMes = document.getElementById('error-Month');
const erroAno = document.getElementById('error-Year');

const ageYears = document.querySelector('.age-years')
const ageMonths = document.querySelector('.age-months')
const ageDays = document.querySelector('.age-days')

function validateDay() {
    if (diaNascimento.value.length == 0) {
        erroDia.innerHTML = 'This field is required';
        erroDia.style.opacity = '1';
        erroDia.style.transition = '.2s';
        textDay.style.color = '#ff5757';
        textDay.style.transition = '.2s';
        diaNascimento.style.border = '1px solid #ff5757'
    } else  if (diaNascimento.value > 31){
        erroDia.innerHTML = 'Must be a valid day';
        erroDia.style.opacity = '1';
        erroDia.style.transition = '.2s';
        textDay.style.color = '#ff5757';
        textDay.style.transition = '.2s';
        diaNascimento.style.border = '1px solid #ff5757';        
    } else {
        erroDia.style.opacity = '0';
        textDay.style.color = '#716f6f';
        diaNascimento.style.border = '1px solid #dbdbdb';
    }
}

function validateMonth() {
    if (mesNascimento.value.length == 0) {
        erroMes.innerHTML = 'This field is required';
        erroMes.style.opacity = '1';
        erroMes.style.transition = '.2s';
        textMonth.style.color = '#ff5757';
        textMonth.style.transition = '.2s';
        mesNascimento.style.border = '1px solid #ff5757'
    } else if (mesNascimento.value > 12){
        erroMes.innerHTML = 'Must be a valid month';
        erroMes.style.opacity = '1';
        erroMes.style.transition = '.2s';
        textMonth.style.color = '#ff5757';
        textMonth.style.transition = '.2s';
        mesNascimento.style.border = '1px solid #ff5757'; 
    } else {
        erroMes.style.opacity = '0';        
        textMonth.style.color = '#716f6f';
        mesNascimento.style.border = '1px solid #dbdbdb';
    }
}

function validateYear() {
    if (anoNascimento.value.length == 0) {
        erroAno.innerHTML = 'This field is required';
        erroAno.style.opacity = '1';
        erroAno.style.transition = '.2s';
        textYear.style.color = '#ff5757';
        textYear.style.transition = '.2s';
        anoNascimento.style.border = '1px solid #ff5757';
    } else if (anoNascimento.value > anoAtual){
        erroAno.innerHTML = 'Must be a valid year';
        erroAno.style.opacity = '1';
        erroAno.style.transition = '.2s';
        textYear.style.color = '#ff5757';
        textYear.style.transition = '.2s';
        anoNascimento.style.border = '1px solid #ff5757'
    } else {
        erroAno.style.opacity = '0';
        textYear.style.color = '#716f6f';
        anoNascimento.style.border = '1px solid #dbdbdb';
    }
}

function calculateAge() {
    validateDay();
    validateMonth();
    validateYear();    
    if (diaNascimento.value != 0 && mesNascimento.value != 0 && anoNascimento.value != 0) {
        if (mesAtual <= mesNascimento.value && diaAtual < diaNascimento.value) {
            ageYears.innerHTML = (anoAtual - anoNascimento.value) - 1;
            countToYear();
        } else {
            ageYears.innerHTML = anoAtual - anoNascimento.value;
            countToYear();
        }

        if (diaAtual < diaNascimento.value) {
            ageMonths.innerHTML = mesNascimento.value - 1;
            countToMonth();
        } else {
            ageMonths.innerHTML = 12 - mesNascimento.value;
            countToMonth();
        }

        let numeroDeDias = '';
        switch (parseInt(mesNascimento.value)) {
            case 2:
                numeroDeDias = 28;
                break;
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                numeroDeDias = 31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                numeroDeDias = 30;
                break;
            default:
                break;
        }
        ageDays.innerHTML = numeroDeDias - diaNascimento.value;
        countToDay();
    }
    if (erroDia.style.opacity == '1' || erroMes.style.opacity == '1' || erroAno.style.opacity == '1') {
        ageDays.innerHTML = '--'
        ageMonths.innerHTML = '--'
        ageYears.innerHTML = '--'
    }
    if (diaNascimento.value > 28 && mesNascimento.value == 2) {
        alert(`February only has 28 days.`)
        erroDia.innerHTML = 'Must be a valid day';
        erroDia.style.opacity = '1';
        erroDia.style.transition = '.2s';
        textDay.style.color = '#ff5757';
        textDay.style.transition = '.2s';
        diaNascimento.style.border = '1px solid #ff5757';
        ageDays.innerHTML = '--'
        ageMonths.innerHTML = '--'
        ageYears.innerHTML = '--'
        diaNascimento.focus();
    } else if (diaNascimento.value == 31 && mesNascimento.value == 4){
        alert(`April only has 30 days.`)
        erroDia.innerHTML = 'Must be a valid day';
        erroDia.style.opacity = '1';
        erroDia.style.transition = '.2s';
        textDay.style.color = '#ff5757';
        textDay.style.transition = '.2s';
        diaNascimento.style.border = '1px solid #ff5757';
        ageDays.innerHTML = '--'
        ageMonths.innerHTML = '--'
        ageYears.innerHTML = '--'
        diaNascimento.focus();
    } else if (diaNascimento.value == 31 && mesNascimento.value == 6){
        alert(`June only has 30 days.`)
        erroDia.innerHTML = 'Must be a valid day';
        erroDia.style.opacity = '1';
        erroDia.style.transition = '.2s';
        textDay.style.color = '#ff5757';
        textDay.style.transition = '.2s';
        diaNascimento.style.border = '1px solid #ff5757';
        ageDays.innerHTML = '--'
        ageMonths.innerHTML = '--'
        ageYears.innerHTML = '--'
        diaNascimento.focus();
    } else if (diaNascimento.value == 31 && mesNascimento.value == 9){
        alert(`September only has 30 days.`)
        erroDia.innerHTML = 'Must be a valid day';
        erroDia.style.opacity = '1';
        erroDia.style.transition = '.2s';
        textDay.style.color = '#ff5757';
        textDay.style.transition = '.2s';
        diaNascimento.style.border = '1px solid #ff5757';
        ageDays.innerHTML = '--'
        ageMonths.innerHTML = '--'
        ageYears.innerHTML = '--'
        diaNascimento.focus();
    } else if (diaNascimento.value == 31 && mesNascimento.value == 11){
        alert(`November only has 30 days.`)
        erroDia.innerHTML = 'Must be a valid day';
        erroDia.style.opacity = '1';
        erroDia.style.transition = '.2s';
        textDay.style.color = '#ff5757';
        textDay.style.transition = '.2s';
        diaNascimento.style.border = '1px solid #ff5757';
        ageDays.innerHTML = '--'
        ageMonths.innerHTML = '--'
        ageYears.innerHTML = '--'
        diaNascimento.focus();
    }
}

function countToYear() {
    let from = 0;
    let to = '';
    if (mesAtual <= mesNascimento.value && diaAtual < diaNascimento.value) {
        to = ageYears.innerHTML = (anoAtual - anoNascimento.value) - 1;
    } else {
        to = ageYears.innerHTML = anoAtual - anoNascimento.value;
    }
    let step = 1;
    let interval = 30;

    if (from == ageYears) {
        ageYears.innerHTML = from;
        return;
    }

    let counter = setInterval(function() {
        from += step;
        ageYears.innerHTML = from;

        if (from == to) {
            clearInterval(counter);
        }
    }, interval);
}


function countToMonth() {
    let from = 0;
    let to = '';
    if (diaAtual < diaNascimento.value) {
        to = ageMonths.innerHTML = mesNascimento.value - 1;
    } else {
        to = ageMonths.innerHTML = 12 - mesNascimento.value;
    }
    let step = 1;
    let interval = 40;

    if (from == ageMonths) {
        ageMonths.innerHTML = from;
        return;
    }

    let counter = setInterval(function() {
        from += step;
        ageMonths.innerHTML = from;

        if (from == to) {
            clearInterval(counter);
        }
    }, interval);
}

function countToDay() {
    let from = 0;
    let to = '';
    let numeroDeDias = '';
        switch (parseInt(mesNascimento.value)) {
            case 2:
                numeroDeDias = 28;
                break;
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                numeroDeDias = 31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                numeroDeDias = 30;
                break;
            default:
                break;
        }
        to = ageDays.innerHTML = numeroDeDias - diaNascimento.value;     
    let step = 1;
    let interval = 50;

    if (from == ageDays) {
        ageDays.innerHTML = from;
        return;
    }

    let counter = setInterval(function() {
        from += step;
        ageDays.innerHTML = from;

        if (from == to) {
            clearInterval(counter);
        }
    }, interval);
}





