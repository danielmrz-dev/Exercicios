const alunos = ["Daniel", "Ana", "Gercino", "Flor"];
const medias = [10, 8, 7.5, 9];

const listas = [alunos, medias];

function exibeNomeENota(aluno) {
    if (listas[0].includes(aluno)) {
        const [alunos, medias] = listas // Desestruturação do Array
        console.log(`${aluno} está na lista.`);
        const indice = alunos.indexOf(aluno)
        console.log(`A média de ${aluno} é ${medias[indice]}.`);
    } else {
        console.log("O aluno não está na lista");
    }
}

exibeNomeENota("Ana");