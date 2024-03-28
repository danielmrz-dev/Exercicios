let notaFinal = 7;
let faltas = 5;
let advertencias = 0;

if (notaFinal < 7 && faltas > 4) {
    console.log("Reprovado! Boas Festas!");
} else {
    console.log("Não foi reprovado! Boas Festas!");
}

if (faltas <= 2 && !advertencias) {
    console.log("Recebeu bonus!");
} else {
    console.log("Não recebeu bonus!");
}