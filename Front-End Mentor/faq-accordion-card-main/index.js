var questions = []
for (let i = 1;  i <= 5; i++) {
    questions.push(document.getElementById(`arrow-down${i}`))    
}

var answers = []
for (let i = 1; i <= 5; i++) {
    answers.push(document.getElementById(`answer${i}`))    
}

var titulo01 = document.getElementById('question01')
var titulo02 = document.getElementById('question02')
var titulo03 = document.getElementById('question03')
var titulo04 = document.getElementById('question04')
var titulo05 = document.getElementById('question05')

var arrow01 = document.getElementById('arrow01')
var arrow02 = document.getElementById('arrow02')
var arrow03 = document.getElementById('arrow03')
var arrow04 = document.getElementById('arrow04')
var arrow05 = document.getElementById('arrow05')


function showAnswer1() {
    titulo01.style.fontWeight = '700'
    titulo02.style.fontWeight = ''
    titulo03.style.fontWeight = ''
    titulo04.style.fontWeight = ''
    titulo05.style.fontWeight = ''
    answer01.style.display = 'block'
    answer02.style.display = 'none'
    answer03.style.display = 'none'
    answer04.style.display = 'none'
    answer05.style.display = 'none'
    arrow01.style.rotate = '180deg'
    arrow02.style.rotate = ''
    arrow03.style.rotate = ''
    arrow04.style.rotate = ''
    arrow05.style.rotate = ''
}

function showAnswer2() {
    titulo01.style.fontWeight = ''
    titulo02.style.fontWeight = '700'
    titulo03.style.fontWeight = ''
    titulo04.style.fontWeight = ''
    titulo05.style.fontWeight = ''
    answer01.style.display = 'none'
    answer02.style.display = 'block'
    answer03.style.display = 'none'
    answer04.style.display = 'none'
    answer05.style.display = 'none'
    arrow01.style.rotate = ''
    arrow02.style.rotate = '180deg'
    arrow03.style.rotate = ''
    arrow04.style.rotate = ''
    arrow05.style.rotate = ''
}

function showAnswer3() {
    titulo01.style.fontWeight = ''
    titulo02.style.fontWeight = ''
    titulo03.style.fontWeight = '700'
    titulo04.style.fontWeight = ''
    titulo05.style.fontWeight = ''
    answer01.style.display = 'none'
    answer02.style.display = 'none'
    answer03.style.display = 'block'
    answer04.style.display = 'none'
    answer05.style.display = 'none'
    arrow01.style.rotate = ''
    arrow02.style.rotate = ''
    arrow03.style.rotate = '180'
    arrow04.style.rotate = ''
    arrow05.style.rotate = ''
}

function showAnswer4() {
    titulo01.style.fontWeight = ''
    titulo02.style.fontWeight = ''
    titulo03.style.fontWeight = ''
    titulo04.style.fontWeight = '700'
    titulo05.style.fontWeight = ''
    answer01.style.display = 'none'
    answer02.style.display = 'none'
    answer03.style.display = 'none'
    answer04.style.display = 'block'
    answer05.style.display = 'none'
    arrow01.style.rotate = ''
    arrow02.style.rotate = ''
    arrow03.style.rotate = ''
    arrow04.style.rotate = '180deg'
    arrow05.style.rotate = ''
}

function showAnswer5() {
    titulo01.style.fontWeight = ''
    titulo02.style.fontWeight = ''
    titulo03.style.fontWeight = ''
    titulo04.style.fontWeight = ''
    titulo05.style.fontWeight = '700'
    answer01.style.display = 'none'
    answer02.style.display = 'none'
    answer03.style.display = 'none'
    answer04.style.display = 'none'
    answer05.style.display = 'block'
    arrow01.style.rotate = ''
    arrow02.style.rotate = ''
    arrow03.style.rotate = ''
    arrow04.style.rotate = ''
    arrow05.style.rotate = '180deg'
}
