var data = new Date()
var ano = data.getFullYear()
var nasc = document.getElementById('nasc')
var res = document.querySelector('h2.res')

function verificar() {
    if (nasc.value.length == 0 || nasc.value > ano) {
        window.alert(`[ERRO!] Verifique se digitou os dados corretamente e tente novamente.`)
    } else {
        var gen = document.getElementsByName('gen')
        var idade = ano - Number(nasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    }   if (gen[0].checked) {
        genero = 'Homem'
            if (idade > 0 && idade <= 12) {
                img.setAttribute('src','imagens/garoto.jpeg')
                res.innerHTML = `Detectamos um menino com ${idade} anos de idade.`
            } else if (idade < 21) {
                img.setAttribute('src','imagens/garoto.jpeg')
                res.innerHTML = `Detectamos um garoto com ${idade} anos de idade.`                
            } else if (idade < 60) {
                img.setAttribute('src','imagens/homem.jpeg')
                res.innerHTML = `Detectamos um homem com ${idade} anos de idade.`                
            } else {
                img.setAttribute('src','imagens/idoso.jpeg')
                res.innerHTML = `Detectamos um idoso com ${idade} anos de idade.`
            }
    } else if (gen[1].checked) {
        genero = 'Mulher'
        if (idade > 0 && idade <= 12) {
            img.setAttribute('src','imagens/garota.jpeg')
            res.innerHTML = `Detectamos uma menina com ${idade} anos de idade.`
        } else if (idade < 21) {
            img.setAttribute('src','imagens/garota.jpeg')
            res.innerHTML = `Detectamos uma garota com ${idade} anos de idade.`                
        } else if (idade < 60) {
            img.setAttribute('src','imagens/mulher.jpg')
            res.innerHTML = `Detectamos uma mulher com ${idade} anos de idade.`                
        } else {
            img.setAttribute('src','imagens/idosa.jpeg')
            res.innerHTML = `Detectamos uma idosa com ${idade} anos de idade.`
        }
    }
    res.style.textalign = 'center'
    res.appendChild(img)
}