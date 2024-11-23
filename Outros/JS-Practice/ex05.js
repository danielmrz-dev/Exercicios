"5. Área de um triângulo: Calcule a área de um triângulo com base na base e na altura fornecidas."

function calculaArea(base, altura) {
    const area = (base * altura) / 2
    return `A área deste triângulo é de ${area} cm².`
}

console.log(calculaArea(10, 6));