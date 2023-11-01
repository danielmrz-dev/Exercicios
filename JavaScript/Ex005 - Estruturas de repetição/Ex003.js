var inicio = document.getElementById('inicio')
var final = document.getElementById('final')
var passo = document.getElementById('passo')
var res = document.querySelector('div.res')

function contar() {
    if (inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0 || passo.value <= 0) {
        window.alert('[ERRO!] Você precisa preencher todos os campos para realizar a contagem. Digite números maiores do que ZERO.')
    } else {
        res.innerHTML = `Contando... <br><br>`
        c = Number(inicio.value)
        f = Number(final.value)
        p = Number(passo.value)

        if (f > c) {
            for (inicio = c; c <= f; c += p)
                res.innerHTML += `👉🏿 ${c}`
        } else {
            for (inicio = c; c >= f; c -= p)
                res.innerHTML += `👉🏿 ${c}`
        }
        res.innerHTML += '<br><br> Fim da contagem!'


        // while (c <= f) {
        //     res.innerHTML += `👉🏿 ${c}`
        //     c = c + p
        // }        
    }
    
}

























