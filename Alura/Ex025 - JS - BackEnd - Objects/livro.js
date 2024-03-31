const livro = {
    nome: "Contos de Dan",
    autor: "Dan",
    anoPublicacao: 2020,
    genero: "Romance",
};

const anoAtual = new Date().getFullYear();

livro.idade = anoAtual - livro.anoPublicacao

console.log(livro["nome"]);

livro.avaliacao = null ? "Belo livro" : "Este livro já possui uma avaliação."

console.log(livro.avaliacao);


