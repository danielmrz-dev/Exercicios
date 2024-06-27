const modal = document.querySelector("dialog");
const openModal = document.querySelector(".delete-btn");
export default function handleModal() {
    if (!modal || !openModal)
        return;
    openModal.addEventListener("click", () => {
        modal.showModal();
        //= Este método faz o modal aparecer centralizado e com fundo escurecido (backdrop)
    });
}
