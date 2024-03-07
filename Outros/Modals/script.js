const abrirModal = document.querySelector(".abrir-modal");
const fecharModal = document.querySelector(".fechar-modal");
const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal-container");

abrirModal.addEventListener("click", () => {
    modal.showModal();
});

fecharModal.addEventListener("click", () => {
    modal.close();
});

modal.addEventListener("click", (evento) => {
    if (evento.target == modal) {
        modal.close();
    }
});
