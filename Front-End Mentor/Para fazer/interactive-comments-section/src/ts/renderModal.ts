import { findCommentById } from "./reply.js";
import { data } from "./data.js";
import renderComments from "./app.js";

export function renderModal(): void {
    const modal: HTMLDialogElement | null = document.querySelector("dialog");
    document.addEventListener("click", (event) => {
        const target = event.target as HTMLElement;
        if (target.closest(".comment__delete")) {
            modal?.showModal();

            const commentId = Number(target.closest(".comment")!.id);
            const commentToDelete = findCommentById(data.comments, commentId);

            document.addEventListener("click", (evento) => {
                const target = evento.target as HTMLElement;
                if (target.classList.contains("btnConfirmDelete")) {
                    deleteCommentOrReplyById(commentToDelete.id);                  
                    renderComments();
                } else if (target.classList.contains("btnCancelDelete")) {
                    modal?.close();
                }
            })

            //= CONTINUAR AQUI, IMPLEMENTAR A LÓGICA DE EDIÇÃO DE COMENTÁRIO
            
        }
    });
}

function deleteCommentOrReplyById(commentIdToDelete: number) {
    for (let i = 0; i < data.comments.length; i++) {
        const comment = data.comments[i];
        
        if (comment.id === commentIdToDelete) {
            data.comments.splice(i, 1);
            return true;
        }
        
        for (let j = 0; j < comment.replies.length; j++) {
            const reply = comment.replies[j];
            if (reply.id === commentIdToDelete) {
                comment.replies.splice(j, 1);
                return true;
            }
        }
    }    
    return false;
}