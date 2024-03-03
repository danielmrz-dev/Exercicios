const carros = {
    modelo: 'Celta',
    ano: 2020,
    cor: 'Azul',
    placa: 'GHT9459',
    estado: 'Seminovo'
}

for (let propriedade in carros) {
    console.log(`O ${propriedade} do carro é ${carros[propriedade]}`)
}