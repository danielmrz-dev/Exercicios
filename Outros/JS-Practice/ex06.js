"6. Números primos: Escreva uma função que verifique se um número fornecido é primo ou não."

function ehNumeroPrimo(numero) {
    if (numero <= 1) {
        return `O número ${numero} não é primo.`
    }
    
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return `O número ${numero} não é primo.`            
        }
    }

    return `O número ${numero} é primo.`
}

console.log(ehNumeroPrimo(9));
