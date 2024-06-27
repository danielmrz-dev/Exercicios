"use strict";
const modal = document.querySelector("dialog");
const openModal = document.querySelector(".delete-btn");
openModal === null || openModal === void 0 ? void 0 : openModal.addEventListener("click", () => {
    modal === null || modal === void 0 ? void 0 : modal.showModal();
    //= Este método faz o modal aparecer centralizado e com fundo escurecido (backdrop)
});
