const medias = [10, 10, 9, 9, 8, 8.5, 10];

// const bonusNota = medias.map(function (nota) {
//     return nota = nota + 1
// })

const bonusNota = medias.map((nota) => nota = nota >= 10 ? nota : nota + 1)


console.log(medias);
console.log(bonusNota);