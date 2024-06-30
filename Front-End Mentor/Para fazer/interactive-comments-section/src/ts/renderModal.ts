export function renderModal(): void {
    const modal: HTMLDialogElement | null = document.querySelector("dialog");
    document.addEventListener("click", (event) => {
        const target = event.target as HTMLElement;
        if (target.closest(".comment__delete")) {
            modal?.showModal();
        }
    });
}
