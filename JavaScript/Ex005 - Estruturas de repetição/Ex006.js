var dianasc = document.getElementById('dia')
var mesnasc = document.getElementById('mes')
var anonasc = document.getElementById('ano')
var anoatual = new Date()
var diahoje = anoatual.getDate()
var meshoje = anoatual.getMonth()
var anohoje = anoatual.getFullYear()

function calcular() {
    if (dianasc.value.length == 0 || mesnasc.value.length == 0 || anonasc.value.length == 0) {
        alert(`Digite uma data válida.`)
    } else {
        let resano = document.querySelector('strong.years')
        let idadeano = anohoje - anonasc.value

        let resmes = document.querySelector('strong.months')
        let idademes = 12 - mesnasc.value

        let resdia = document.querySelector('strong.days')
        let idadedia = 31 - dianasc.value

        resano.innerHTML = ` ${idadeano}`
        resmes.innerHTML = ` ${idademes}`
        resdia.innerHTML = ` ${idadedia}`
    }    
}
