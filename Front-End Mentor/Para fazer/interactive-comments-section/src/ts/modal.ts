const modal: HTMLDialogElement | null = document.querySelector("dialog");
const openModal: HTMLButtonElement | null = document.querySelector(".delete-btn");

export default function handleModal(): void {
    if (!modal || !openModal) return;
    openModal.addEventListener("click", () => {
        modal.showModal() 
        //= Este método faz o modal aparecer centralizado e com fundo escurecido (backdrop)
    })
}