let listaDeItens = [];
let itemEditar;

const form = document.getElementById("form-itens");
const itensInput = document.getElementById("receber-item");
const ulItens = document.getElementById("lista-de-itens");
const ulItensComprados = document.getElementById("itens-comprados");
const listaRecuperada = localStorage.getItem("listaDeItens");

function atualizaLocalStorage() {
    localStorage.setItem("listaDeItens", JSON.stringify(listaDeItens));
}

if (listaRecuperada) {
    listaDeItens = JSON.parse(listaRecuperada);
    mostratItens();
} else {
    listaDeItens = [];
}

itensInput.focus();

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    salvarItem();
    mostratItens();
    itensInput.focus();
    itensInput.value = "";
});

function salvarItem() {
    const comprasItem = itensInput.value;
    const checarDuplicado = listaDeItens.some(
        (elemento) => elemento.valor.toUpperCase() === comprasItem.toUpperCase()
    );

    if (checarDuplicado) {
        alert("Esse item já existe na lista.");
    } else {
        listaDeItens.push({
            valor: comprasItem,
            checar: false,
        });
    }
}

function mostratItens() {
    ulItens.innerHTML = "";
    ulItensComprados.innerHTML = "";
    listaDeItens.forEach((item, index) => {
        if (item.checar) {
            ulItensComprados.innerHTML += `
            <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
                <div>
                    <input type="checkbox" checked class="is-clickable" />  
                    <span class="itens-comprados is-size-5">${item.valor}</span>
                </div>
                <div>
                    <i class="fa-solid fa-trash is-clickable deletar"></i>
                </div>
            </li>
            `;
        } else {
            ulItens.innerHTML += `
                <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
                    <div>
                        <input type="checkbox" class="is-clickable" />
                        <input type="text" class="is-size-5" value="${item.valor}" ${index !== Number(itemEditar) ? "disabled" : ""}></input>
                    </div>
                    <div>
                    ${
                        index === Number(itemEditar)
                            ? '<button onclick="salvarEdicao()"><i class="fa-regular fa-floppy-disk is-clickable"></i></button>'
                            : '<i class="fa-regular is-clickable fa-pen-to-square editar"></i>'
                    }
                        <i class="fa-solid fa-trash is-clickable deletar"></i>
                    </div>
                </li>
                `;
        }
    });
    const inputsCheck = document.querySelectorAll('input[type="checkbox"]');

    inputsCheck.forEach((input) => {
        input.addEventListener("click", (evento) => {
            let valorDoElemento =
                evento.target.parentElement.parentNode.getAttribute(
                    "data-value"
                );
            listaDeItens[valorDoElemento].checar = evento.target.checked;
            mostratItens();
        });
    });

    const deletarObjetos = document.querySelectorAll(".deletar");

    deletarObjetos.forEach((input) => {
        input.addEventListener("click", (evento) => {
            let valorDoElemento =
                evento.target.parentElement.parentNode.getAttribute(
                    "data-value"
                );
            listaDeItens.splice(valorDoElemento, 1);
            mostratItens();
        });
    });

    const editarItens = document.querySelectorAll(".editar");
    editarItens.forEach((input) => {
        input.addEventListener("click", (evento) => {
            itemEditar =
                evento.target.parentElement.parentNode.getAttribute(
                    "data-value"
                );
            mostratItens();
        });
    });

    atualizaLocalStorage();
}

function salvarEdicao() {
    const itemEditado = document.querySelector(
        `[data-value="${itemEditar}"] input[type="text"]`
    );
    listaDeItens[itemEditar].valor = itemEditado.value;
    itemEditar = -1;
    mostratItens();
}
