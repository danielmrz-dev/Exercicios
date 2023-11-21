let numero = document.getElementById('numero')
let tab = document.getElementById('tabela')
let analise = document.querySelector('div.analise')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado.`
        tab.appendChild(item)
        analise.innerHTML = ''
    } else {
        alert('[ERRO!] Você precisa digitar um número válido!')            
    }
    numero.value = ''
    numero.focus()
}      
    
function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de clicar em finalizar.')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]
            media = soma / valores.length
            if (valores[pos] > maior) {
                maior = valores[pos]                
            if (valores[pos] < menor) {
                menor = valores[pos]    
            }
        }
        }
        
        analise.innerHTML = ''
        analise.innerHTML += `Ao todo, temos ${total} números cadastrados. <br>`
        analise.innerHTML += `O maior valor informado foi ${maior}. <br>`
        analise.innerHTML += `O menor valor informado foi ${menor}. <br>`
        analise.innerHTML += `O resultado da soma de todos os valores é ${soma}. <br>`
        analise.innerHTML += `A média de todos os valores é ${media}. <br>`
    }
}
