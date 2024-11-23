"8. Ano bissexto: Verifique se um ano fornecido é bissexto."

function verificaBissexto(ano) {
    const ehDivisivelPor4 = ano % 4 === 0
    const ehDivisivelPor100 = ano % 100 === 0
    const ehDivisivelPor400 = ano % 400 === 0

    if (ehDivisivelPor4 && (ehDivisivelPor100 && ehDivisivelPor400)) {
        return `O ano ${ano} é bissexto.`
    }

    if (ehDivisivelPor4 && !ehDivisivelPor100) {
        return `O ano ${ano} é bissexto.`
    }

    return `O ano ${ano} não é bissexto.`
}

console.log(verificaBissexto(1900))