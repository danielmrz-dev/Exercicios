import renderComments from "./app.js";
import { data } from "./data.js";

// Função recursiva para encontrar o comentário pelo ID
function findCommentById(comments: any, id: number) {
    for (const comment of comments) {
        if (comment.id === id) {
            return comment;
        }
        if (comment.replies && comment.replies.length > 0) {
            const foundReply: any = findCommentById(comment.replies, id);
            if (foundReply) {
                return foundReply;
            }
        }
    }
    return null;
}

export function likeAndDislike() {
    const likeBtn = document.querySelectorAll(".like");

    likeBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            const idHTML = Number(btn.closest(".comment")?.id);
            const commentToLike = findCommentById(data.comments, idHTML);
            if (commentToLike) {
                
                commentToLike.score += 1;  

                console.log(commentToLike);

                //+ CONTINUAR AQUI COM A LÓGICA DE LIKE E DISLIKE
            }
            
        });
    });
}













// import Comentario from "./Comentario.js";
// import { data } from "./data.js";

// export function likeAndDislike(): void {
//     const likeBtn: NodeListOf<HTMLButtonElement> | null = document.querySelectorAll(".like");

//     likeBtn.forEach((btn) => {
//         btn.addEventListener("click", () => {
//             const idHTML = Number(btn.closest(".comment")?.id);
//             const commentToLike = data.comments.filter(comment => comment.id === idHTML)
//             console.log(commentToLike);
            
//         });
//     });
// }
