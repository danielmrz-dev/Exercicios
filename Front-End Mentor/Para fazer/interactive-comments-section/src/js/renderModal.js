export function renderModal() {
    const modal = document.querySelector("dialog");
    document.addEventListener("click", (event) => {
        const target = event.target;
        if (target.closest(".comment__delete")) {
            modal === null || modal === void 0 ? void 0 : modal.showModal();
        }
    });
}
