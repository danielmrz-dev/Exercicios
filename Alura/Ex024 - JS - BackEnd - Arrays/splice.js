const listaEstudantes = ["Daniel", "Ana", "Gercino", "Flor", "Eni"]

console.log(listaEstudantes)

listaEstudantes.splice(1, 2, "Thiago", "Douglas", "Kratos")

console.log(listaEstudantes)

// O método SPLICE usa 3 parametros:
// O 1º parametro é o índice no qual será iniciada a remoção dos itens
// O 2º parametro é a quantidade de itens a serem removidos a partir do índice declarado no primeiro parametro
// Do 3º parametro em diante são os itens que serão inclusos no lugar dos itens que foram excluídos.
