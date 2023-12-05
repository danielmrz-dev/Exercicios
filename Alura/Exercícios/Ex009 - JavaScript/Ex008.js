// Verificador tributário

const salario = 2500;
let imposto = '';

if (salario <= 1500) {
    imposto = 15
} else if (salario <= 2000) {
    imposto = 17.5    
} else if (salario <= 2500) {
    imposto = 20
} else if (salario <= 3000) {
    imposto = 22.5
} else if (salario <= 3500) {
    imposto = 25
} else if (salario <= 4000) {
    imposto = 27.5
}

if (salario <= 1500) {
    console.log(`Seu salário é de R$ ${salario} e seu imposto é de ${imposto}%.`)
} else {
    console.log(`Seu salário é de R$ ${salario} e seu imposto é de ${imposto}%.`)    
}