var data = new Date()
var agora = data.getFullYear()
var nasc = document.getElementById('nasc')
var res = document.querySelector('h2.res')

function verificar() {
    if (nasc.value > agora || nasc.value.length == 0 || nasc.value < 1900) {
        window.alert('[ATENÇÃO!] O ano de nascimento precisa ser um número maior que 1900 e não pode ser maior que o ano atual. Tente novamente.')
    } else {
        var gen = document.getElementsByName('gen')
        var idade = agora - Number(nasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    }   if (gen[0].checked) {
            genero = 'Homem'
                if (idade <= 1) {
                    img.setAttribute('src','imagens/bebezinho.jpg')
                    res.innerHTML = `Um bebê de ${idade} ano.`
                } else if (idade <= 3) {
                    img.setAttribute('src','imagens/bebezinho.jpg')
                    res.innerHTML = `Um bebê de ${idade} anos.`
                } else if (idade <= 12) {
                    img.setAttribute('src','imagens/menino.jpg')
                    res.innerHTML = `Um menino de ${idade} anos.`
                } else if (idade <= 21) {
                    img.setAttribute('src','imagens/garoto.jpeg')
                    res.innerHTML = `Um garoto de ${idade} anos.`
                } else if (idade <= 60) {
                    img.setAttribute('src','imagens/homem.jpeg')
                    res.innerHTML = `Um homem de ${idade} anos.`
                } else if (idade <= 100) {
                    img.setAttribute('src','imagens/idoso.jpeg')
                    res.innerHTML = `Um idoso de ${idade} anos.`
                } else {
                    img.setAttribute('src','imagens/morte.jpeg')
                    res.innerHTML = `Um homem que teria ${idade} anos, caso estivesse vivo.`
                }
                    
    }   else if (gen[1].checked) {
            genero = 'Mulher'
            if (idade <= 1) {
                img.setAttribute('src','imagens/bebezinha.jpg')
                res.innerHTML = `Uma bebê de ${idade} ano.`
            } else if (idade <= 3) {
                img.setAttribute('src','imagens/bebezinha.jpg')
                res.innerHTML = `Uma bebê de ${idade} anos.`
            } else if (idade <= 12) {
                img.setAttribute('src','imagens/menina.jpg')
                res.innerHTML = `Uma menina de ${idade} anos.`
            } else if (idade <= 21) {
                img.setAttribute('src','imagens/garota.jpeg')
                res.innerHTML = `Uma garota de ${idade} anos.`
            } else if (idade <= 60) {
                img.setAttribute('src','imagens/mulher.jpg')
                res.innerHTML = `Uma mulher de ${idade} anos.`
            } else if (idade <= 100) {
                img.setAttribute('src','imagens/idosa.jpeg')
                res.innerHTML = `Uma idosa de ${idade} anos.`
            } else {
                img.setAttribute('src','imagens/morte.jpeg')
                res.innerHTML = `Uma mulher que teria ${idade} anos, caso estivesse viva.`
            }
    }
    res.appendChild(img)   
}