let num = [4, 5, 2, 7, 3, 1]

// num.indexOf(7) // Encontra o número entre parênteses e revela sua posição dentro da variável.

// console.log(`O valor buscado está na posição ${num.indexOf(7)}.`)


let pos = num.indexOf(7)

if (pos == -1) {
    console.log('O valor buscado não existe dentro dessa variável.')
} else {
    console.log(`O valor buscado está na posição ${pos}.`)
}

