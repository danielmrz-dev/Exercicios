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

function validateDay() {
    if (diaNascimento.value == 0) {
        erroDia.style.opacity = '1';
    } else {
        erroDia.style.opacity = '0';
    }
}
function validateMonth() {
    if (mesNascimento.value == 0) {
        erroMes.style.opacity = '1';
    } else {
        erroMes.style.opacity = '0';
    }
}
function validateYear() {
    if (anoNascimento.value == 0) {
        erroAno.style.opacity = '1';
    } else {
        erroAno.style.opacity = '0';
    }
}


function calculateAge() {
    validateDay();
    validateMonth();
    validateYear();    
}

















































// switch (mesAtual) {
//     case 0:
//         mesAtual = 'Janeiro'
//         break;
//     case 1:
//         mesAtual = 'Fevereiro'
//         break;
//     case 2:
//         mesAtual = 'Março'
//         break;
//     case 3:
//         mesAtual = 'Abril'
//         break;
//     case 4:
//         mesAtual = 'Maio'
//         break;
//     case 5:
//         mesAtual = 'Junho'
//         break;
//     case 6:
//         mesAtual = 'Julho'
//         break;
//     case 7:
//         mesAtual = 'Agosto'
//         break;
//     case 8:
//         mesAtual = 'Setembro'
//         break;
//     case 9:
//         mesAtual = 'Outubto'
//         break;
//     case 10:
//         mesAtual = 'Novembro'
//         break;
//     case 11:
//         mesAtual = 'Dezembro'
//         break;
//     default:
//         break;
// }

// const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];


// let numeroDeDias = '';
// switch (meses) {
//     case 'Fevereiro':
//         numeroDeDias = 28;
//     case 'Janeiro':
//     case 'Março':
//     case 'Maio':
//     case 'Julho':
//     case 'Agosto':
//     case 'Outubro':
//     case 'Dezembro':
//         numeroDeDias = 31;
//         break;
//     case 'Abril':
//     case 'Junho':
//     case 'Setembro':
//     case 'Novembro':
//         numeroDeDias = 30;
//         break;
//     default:
//         break;
// }

// alert(`O mês de ${meses} tem ${numeroDeDias} dias.`);