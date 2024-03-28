const medias = [10, 10, 9, 9, 8, 8.5];

let somaNotas = 0;

for (const nota of medias) {
    somaNotas += nota
}

const media = somaNotas / medias.length

console.log(media.toFixed(2));
