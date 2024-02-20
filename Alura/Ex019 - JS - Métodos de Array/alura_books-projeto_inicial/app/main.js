let livros = [];
const endpointDaApi =
    "https://guilhermeonrails.github.io/casadocodigo/livros.json";

const section = document.querySelector('.livros')

buscarLivros();

async function buscarLivros() {
    const res = await fetch(endpointDaApi);
    livros = await res.json();
    livros.forEach(livro => {
        section.innerHTML += `
        <div class="livro">
            <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
    });
}
