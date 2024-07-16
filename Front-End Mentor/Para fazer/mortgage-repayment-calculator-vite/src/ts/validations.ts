export function validateField(fieldId: string, iconId: string) {
    const field: HTMLInputElement | null = document.querySelector(fieldId);
    const icon: HTMLSpanElement | null = document.querySelector(iconId);
    const errorMsg: HTMLElement | null = field
        ?.closest(".parent")
        ?.querySelector(".error-msg") as HTMLParagraphElement;
    if (field) {
        const isValid = field.value === "" ? false : true;
        if (!isValid) {
            field.classList.add("error-state-input");
            icon?.classList.add("error-state-icon");
            errorMsg?.classList.add("error-msg-active");
        } else {
            field.classList.remove("error-state-input");
            icon?.classList.remove("error-state-icon");
            errorMsg?.classList.remove("error-msg-active");
        }
    }
}
