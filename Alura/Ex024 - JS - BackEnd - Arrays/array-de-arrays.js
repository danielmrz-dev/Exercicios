const alunos = ["Daniel", "Ana", "Gercino", "Flor"];
const medias = [10, 8, 7.5, 9];

const listas = [alunos, medias];

for (let i = 0; i < alunos.length; i++) {
    console.log(`A aluna ${listas[0][i]} teve a média de ${listas[1][i]}`);    
}
