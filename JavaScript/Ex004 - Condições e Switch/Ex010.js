var agora = new Date()
hora = agora.getHours()
var texto = document.querySelector('h2.texto')
var principal = document.querySelector('section.principal')
var img = document.querySelector('img.img')
var titulo = document.querySelector('h1.title')
var github = document.querySelector('div.github')

if (hora < 12) {
    texto.innerHTML = `Bom dia! Agora são ${hora} horas.`
    document.body.style.background = '#F28322'
    principal.style.background = '#F2B56B'
    img.src = 'imagens/manha.jpg'    
}   else if (hora < 18) {
        texto.innerHTML = `Boa tarde! Agora são ${hora} horas.`
        principal.style.background = '#A4B3BF'
        document.body.style.background = '#659DBF'
        img.src = 'imagens/tarde.jpg'
}       else {
            texto.innerHTML = `Boa noite! Agora são ${hora} horas.`
            texto.style.color = 'white'                    
            principal.style.background = '#022859'
            document.body.style.background = '#022873'
            img.src = 'imagens/noite.jpg'
            titulo.style.color = 'white'
            github.style.color = 'white'        
}