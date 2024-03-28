const listaEstudantes = ["Daniel", "Ana", "Gercino", "Flor", "Eni"]
const medias = [9, 10, 3.5, 4, 10];

const alunosAprovados = listaEstudantes.filter((aluno, indice) => {
    return medias[indice] >= 7;
})

// Preciso rever isso acima

console.log(alunosAprovados);


