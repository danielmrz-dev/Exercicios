var numero = document.getElementById('numero')
var res = document.querySelector('h2.res')
var tab = document.getElementById('tab')

function tabuada() {
    if (numero.value.length == 0) {
        res.innerHTML = '[ERRO!] Você precisa digitar algum número!'                
    } else {
        let num = Number(numero.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tab.appendChild(item)
            c++
        }

        // while (c <= 10) {
        //     let times = num*c
        //     res.innerHTML += `${num} x ${c} = ${times} <br>`
        //     c++
        // }
    }
}



















