"4. Reverter uma string: Escreva uma função que recebe uma string e retorna a string invertida."

const string = "Paroxítona"

function reverteString(string) {
    return string.split('').reverse().join('')
}

console.log(reverteString(string));
