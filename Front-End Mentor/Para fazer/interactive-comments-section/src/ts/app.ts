import { data } from "./data.js";
import Comentario from "./Comentario.js";
import { renderModal } from "./renderModal.js";
import { like, dislike } from "./likeAndDislike.js";
import replyComment from "./reply.js";

export const commentsContainer: HTMLElement | null =
    document.querySelector(".comments");

async function getData() {
    const api = await fetch("data.json");
    const response = await api.json();
    return response;
}

let counter = 0;

export default function renderComments() {
    const comments: any[] = data.comments;
    const currentUser: any = data.currentUser;

    commentsContainer!.innerHTML = `

    <dialog>
        <div class="modal__container">
            <h2>Delete comment</h2>
            <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
            <button class="btnCancelDelete">No, Cancel</button>
            <button class="btnConfirmDelete">Yes, delete</button>					
        </div>
    </dialog>
    `;

    comments.forEach((comment: any) => {
        const comentario = new Comentario(
            comment.id,
            comment.content,
            comment.createdAt,
            comment.score,
            comment.user.username,
            comment.user.image.png,
            comment.replies.map(
                (reply: any) =>
                    new Comentario(
                        reply.id,
                        reply.content,
                        reply.createdAt,
                        reply.score,
                        reply.user.username,
                        reply.user.image.png,
                        reply.replies || [],
                        reply.replyingTo
                    )
            )
        );

        const respostasHTML = comentario.replies
            .map(
                (resposta) => `
                <section class="comment" id="${resposta.id}">
                    <div class="comment__header">
                        <img src=${
                            resposta.profilePicture
                        } alt="Profile Picture"/>
                        <span class="comment__username">${
                            resposta.username
                        }</span>
						${
                            resposta.username === currentUser.username
                                ? `
							<span class="comment__username-you">you</span>
							`
                                : ""
                        }
                        <span class="comment__date">${resposta.createdAt}</span>
                    </div>
                    <p class="comment__content">
					<strong class="comment__replyingTo">@${resposta.replyingTo}</strong>
                    ${resposta.content}
                    </p>
                    <div class="comment__likes">
                        <div class="comment__likes-box">
                            <button class="comment__likes-btn like">
                                +
                            </button>
                            <span>${resposta.score}</span>
                            <button class="comment__likes-btn dislike">
                                -
                            </button>
                        </div>
                    </div>

					${
                        resposta.username === currentUser.username
                            ? `
						<div class="comment__delete-edit">
							<button class="comment__delete">
								<img src="images/icon-delete.svg" />
								<span class="delete-btn">Delete</span>
							</button>
							<button class="comment__edit">
								<img src="images/icon-edit.svg" />
								<span>Edit</span>
							</button>
						</div>
						
						`
                            : `
						<button class="comment__reply-btn">
							<img src="images/icon-reply.svg" />
							Reply							
						</button>`
                    }

                </section>

            `
            )
            .join("");

        if (!commentsContainer) return;

        commentsContainer.innerHTML += `

                <div class="comment__container">
                    <section class="comment" id="${comentario.id}">
                        <div class="comment__header">
                            <img src=${
                                comentario.profilePicture
                            } alt="Profile Picture"/>
                            <span class="comment__username">${
                                comentario.username
                            }</span>
                            <span class="comment__date">${
                                comentario.createdAt
                            }</span>
                        </div>
                        <p class="comment__content">
                        ${comentario.content}
                        </p>
                        <div class="comment__likes">
                            <div class="comment__likes-box">
                                <button class="comment__likes-btn like">
                                    +
                                </button>
                                <span>${comentario.score}</span>
                                <button class="comment__likes-btn dislike">
                                    -
                                </button>
                            </div>
                        </div>
                        <button class="comment__reply-btn">
                            <img src="images/icon-reply.svg" />
                            Reply                          
                        </button>

                    </section>

                    <div class="comment-reply">
                        <img src=${currentUser.image.png}>
                        <textarea name="" id="" rows="4" placeholder="Add a comment..."></textarea>
                        <button class="comment__btn-confirm-reply">Reply</button>
                    </div>

                    ${
                        comentario.replies.length === 0
                            ? ""
                            : `
                        <section class="comment__replies">
                            ${respostasHTML}
                        </section>
                    `
                    }
                </div>
            `;

        renderModal();
        like();
        dislike();
        replyComment();
    });
    const newCommentElement = `
    <section class="new__comment">
        <form>
            <textarea name="" id="" placeholder="Add a comment..." rows="4"></textarea>
            <img src="images/avatars/image-juliusomo.webp">
            <button>SEND</button>
        </form>
    </section>
    `;
    commentsContainer?.insertAdjacentHTML("beforeend", newCommentElement);
}

renderComments();
