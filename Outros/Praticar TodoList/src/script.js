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

const tarefas = [
    {
        descricao: "Tarefa teste",
        completa: false,
    },
];

listarTarefas(tarefas);

btnAdicionarTarefa.addEventListener("click", () => {
    modal.showModal();
});

fecharModal.addEventListener("click", (evento) => {
    evento.preventDefault()
    modal.close();
});

modal.addEventListener("click", (evento) => {
    if (evento.target === modal) {
        modal.close();
    }
});

function listarTarefas(tarefas) {
    ulTarefas.innerHTML = "";
    tarefas.forEach((tarefa) => {
        ulTarefas.innerHTML += `
        <li class="todo__list-item">
            <label>
                <input type="checkbox" name="" id="" class="todo__item-checkbox">
                ${tarefa.descricao}
            </label>
            <button class="todo__edit-delete" id="edit-todo">
                <img src="assets/Frame 6.svg" alt="">
            </button>
            <button class="todo__edit-delete" id="delete-todo">
                <img src="assets/trash-icon.svg" alt="">
            </button>
        </li>
        `;
    });
}

btnCriarNovaTarefa.addEventListener("click", (evento) => {
    evento.preventDefault();
    const descricaoNovaTarefa = inputNovaTarefa.value;
    criarObjetoTarefa(descricaoNovaTarefa, false)
    console.log((tarefas));
    modal.close()
    listarTarefas(tarefas)
});

function criarObjetoTarefa(descricao, completa = false) {
    tarefas.push({
        descricao: descricao,
        completa: completa
    })
}
































// selectInput.addEventListener("change", () => {
//     if (all.selected) {
//         console.log("Opção TODAS selecionada.");
//     } else if (complete.selected) {
//         console.log("Opção COMPLETAS selecionada.");
//     } else {
//         console.log("Opção INCOMPLETAS selecionada.");
//     }
// })
