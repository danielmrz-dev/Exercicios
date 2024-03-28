const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = 9;
const notaQuartoBi = 9.3;
let media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

// if (media >= 7) {
//     console.log(`A média é de ${media.toFixed(2)}. Você ganhou um bônus de um décimo na sua média.`);
//     media = media + 0.1
//     console.log(`Logo, sua média final é ${media.toFixed(2)}. Você foi APROVADO!`);
// } else {
//     console.log(`A média é de ${media.toFixed(2)}. Você foi REPROVADO!`);
    
// }

// console.log(`A média é ${media.toFixed(2)}`);

const salarioMensal = 3500; 
const despesasFixas = 1200; 
const despesasVariaveis = 500; 
const economiasMensais = 800;
const bonusAnual = 3000;

const resultado = (salarioMensal - despesasFixas - despesasVariaveis) * 12 + (economiasMensais * 12) + bonusAnual;

console.log(resultado);

