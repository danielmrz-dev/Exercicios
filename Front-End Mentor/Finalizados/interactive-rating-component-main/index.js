let nota01 = document.getElementById('nota01')

let nota02 = document.getElementById('nota02')

let nota03 = document.getElementById('nota03')

let nota04 = document.getElementById('nota04')

let nota05 = document.getElementById('nota05')

let section01 = document.querySelector('section.section01')
let section02 = document.querySelector('section.section02')
let rate = document.getElementById('rate')


function clicar1() {
    nota01.style.color = 'white'
    nota01.style.background = '#7d8899'    

    nota02.style.background = ''
    nota02.style.color = ''  

    nota03.style.background = ''
    nota03.style.color = ''

    nota04.style.background = ''
    nota04.style.color = ''

    nota05.style.background = ''
    nota05.style.color = ''
}

function clicar2() {
    nota01.style.background = ''
    nota01.style.color = ''  

    nota02.style.background = '#7d8899'
    nota02.style.color = 'white'
    
    nota03.style.background = ''
    nota03.style.color = ''

    nota04.style.background = ''
    nota04.style.color = ''

    nota05.style.background = ''
    nota05.style.color = ''
}

function clicar3() {    
    nota01.style.background = ''
    nota01.style.color = ''
    
    nota02.style.background = ''
    nota02.style.color = ''

    nota03.style.background = '#7d8899'
    nota03.style.color = 'white'

    nota04.style.background = ''
    nota04.style.color = ''

    nota05.style.background = ''
    nota05.style.color = ''
}

function clicar4() {
    nota01.style.background = ''
    nota01.style.color = ''
    
    nota02.style.background = ''
    nota02.style.color = ''

    nota03.style.background = ''
    nota03.style.color = ''
    
    nota04.style.background = '#7d8899'
    nota04.style.color = 'white'    

    nota05.style.background = ''
    nota05.style.color = ''    
}

function clicar5() {
    nota01.style.background = ''
    nota01.style.color = ''
    
    nota02.style.background = ''
    nota02.style.color = ''

    nota03.style.background = ''
    nota03.style.color = ''

    nota04.style.background = ''
    nota04.style.color = ''

    nota05.style.background = '#7d8899'
    nota05.style.color = 'white'    
}

function enviarnota() {
    let inputnotas = document.getElementsByName('number')
    let nota = ''
    if (inputnotas[0].checked) {
        nota = 1
        section01.style.display = 'none'
        section02.style.display = 'flex'
        rate.innerHTML = '1'
    } else if (inputnotas[1].checked){
        nota = 2
        section01.style.display = 'none'
        section02.style.display = 'flex'
        rate.innerHTML = '2'
    } else if (inputnotas[2].checked){
        nota = 3
        section01.style.display = 'none'
        section02.style.display = 'flex'
        rate.innerHTML = '3'
    } else if (inputnotas[3].checked){
        nota = 4
        section01.style.display = 'none'
        section02.style.display = 'flex'
        rate.innerHTML = '4'
    } else if (inputnotas[4].checked){
        nota = 5
        section01.style.display = 'none'
        section02.style.display = 'flex'
        rate.innerHTML = '5'
}
}