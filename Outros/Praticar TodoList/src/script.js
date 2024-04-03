const todas = document.querySelector(".todo__all");
const completas = document.querySelector(".todo__ativas");
const incompletas = document.querySelector(".todo__completas");
const selectInput = document.querySelector("#select");
const btnAdicionarTarefa = document.querySelector(".todo__add-new-task");
const ulTarefas = document.querySelector(".todo__list");
const tarefaCheckbox = document.querySelectorAll(".todo__item-checkbox");
const modal = document.querySelector(".todo__modal");
const fecharModal = document.querySelector(".cancel");
const btnCriarNovaTarefa = document.querySelector(".criar");
const inputNovaTarefa = document.querySelector("#new-task-decription");
const btnExcluirTarefa = document.querySelectorAll(".delete");

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

if (tarefas) {
    listarTarefas(tarefas);
} else {
    tarefas = [];
}

btnAdicionarTarefa.addEventListener("click", () => {
    modal.showModal();
});

fecharModal.addEventListener("click", (evento) => {
    evento.preventDefault();
    modal.close();
});

modal.addEventListener("click", (evento) => {
    if (evento.target === modal) {
        modal.close();
    }
});

function listarTarefas(tarefas) {
    ulTarefas.innerHTML = "";
    tarefas.forEach((tarefa, indice) => {
        ulTarefas.innerHTML += `
        <li class="todo__list-item" data-value="${indice}">
            <label>
                <input type="checkbox" name="" id="" class="todo__item-checkbox">
                ${tarefa.descricao}
            </label>
            <button class="todo__edit-delete edit" id="edit-todo">
                <img src="assets/Frame 6.svg" alt="">
            </button>
            <button class="todo__edit-delete delete" id="delete-todo">
                <img src="assets/trash-icon.svg" alt="">
            </button>
        </li>
        `;
    });
}

btnCriarNovaTarefa.addEventListener("click", (evento) => {
    evento.preventDefault();
    const descricaoNovaTarefa = inputNovaTarefa.value;
    inputNovaTarefa.value = "";
    criarObjetoTarefa(descricaoNovaTarefa, false);
    modal.close();
    listarTarefas(tarefas);
});

function criarObjetoTarefa(descricao, completa = false) {
    tarefas.push({
        descricao: descricao,
        completa: completa,
    });
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

document.addEventListener("click", (e) => {
    if (e.target.parentElement.classList.contains("delete")) {
        let id = e.target.parentElement.parentElement.getAttribute("data-value")
        tarefas.splice(id, 1)
        localStorage.setItem("tarefas", JSON.stringify(tarefas))
        listarTarefas(tarefas)
    }
});

document.addEventListener("click", (e) => {
    if (e.target.parentElement.classList.contains("edit")) {
        let id = e.target.parentElement.parentElement.getAttribute("data-value")
        let novaDescricao = prompt("Digite a nova descrição da tarefa:")
        
        if (novaDescricao === "") {
            alert("Por favor, digite uma tarefa válida!")
        } else if(novaDescricao === tarefas[id].descricao) {
            alert("A tarefa não pode ter a mesma descrição de antes!")
        } else {
            tarefas[id].descricao = novaDescricao
        }
        localStorage.setItem("tarefas", JSON.stringify(tarefas))
        listarTarefas(tarefas)
    }
});

