let numero = document.getElementById('numero')
let tab = document.getElementById('tabela')


for (let c = 0; c <= 10 ; c++) {
    function adicionar() {
        if (numero.value.length == 0 || numero.value <= 0 || numero.value > 100) {
            alert('[ERRO!] Você precisa digitar um número válido!')
        } else {
            let num = Number(numero.value)
            tab.innerHTML = ''
            let option = document.createElement('option')
            option.text = `O valor ${num} foi adicionado.`
            tab.appendChild(option)                 
            }
        }    
    
}



