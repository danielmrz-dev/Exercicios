const data = new Date();
anoAtual = data.getFullYear();
mesAtual = data.getMonth();
diaAtual = data.getDate();

const diaNascimento = document.querySelector('.input-day');
const mesNascimento = document.querySelector('.input-month');
const anoNascimento = document.querySelector('.input-year');

const erroDia = document.getElementById('error-Day');
const erroMes = document.getElementById('error-Month');
const erroAno = document.getElementById('error-Year');

const ageYears = document.querySelector('.age-years')
const ageMonths = document.querySelector('.age-months')
const ageDays = document.querySelector('.age-days')

function validateDay() {
    if (diaNascimento.value == 0 || diaNascimento.value > 31) {
        erroDia.style.opacity = '1';
        erroDia.style.transition = '.2s';
    } else {
        erroDia.style.opacity = '0';
    }
}
function validateMonth() {
    if (mesNascimento.value == 0 || mesNascimento.value > 12) {
        erroMes.style.opacity = '1';
        erroMes.style.transition = '.2s';
    } else {
        erroMes.style.opacity = '0';
    }
}
function validateYear() {
    if (anoNascimento.value == 0 || anoNascimento.value > anoAtual) {
        erroAno.style.opacity = '1';
        erroAno.style.transition = '.2s';
    } else {
        erroAno.style.opacity = '0';
    }
}

function calculateAge() {
    validateDay();
    validateMonth();
    validateYear();    
    if (diaNascimento.value != 0 && mesNascimento.value != 0 && anoNascimento.value != 0) {
        if (mesAtual <= mesNascimento.value && diaAtual < diaNascimento.value) {
            ageYears.innerHTML = (anoAtual - anoNascimento.value) - 1;
        } else {
            ageYears.innerHTML = anoAtual - anoNascimento.value;
        }

        if (diaAtual < diaNascimento.value) {
            ageMonths.innerHTML = mesNascimento.value - 1;
        } else {
            ageMonths.innerHTML = 12 - mesNascimento.value;
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
    }
}