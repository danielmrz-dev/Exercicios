const medias = [10, 10, 9, 9, 8, 8.5, 10];

let somaNotas = 0;

medias.forEach(nota => {
    somaNotas += nota
})

const media = somaNotas / medias.length

console.log(media.toFixed(2));
