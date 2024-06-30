var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { data } from "./data.js";
import Comentario from "./Comentario.js";
import { renderModal } from "./renderModal.js";
import { likeAndDislike } from "./likeAndDislike.js";
const commentsContainer = document.querySelector(".comments");
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const api = yield fetch("data.json");
        const response = yield api.json();
        return response;
    });
}
export default function renderComments() {
    // getData().then((data) => {
    const comments = data.comments;
    const currentUser = data.currentUser;
    comments.forEach((comment) => {
        const comentario = new Comentario(comment.id, comment.content, comment.createdAt, comment.score, comment.user.username, comment.user.image.png, comment.replies.map((reply) => new Comentario(reply.id, reply.content, reply.createdAt, reply.score, reply.user.username, reply.user.image.png, reply.replies || [], reply.replyingTo)));
        const respostasHTML = comentario.replies
            .map((resposta) => `
                <section class="comment" id="${resposta.id}">
                    <div class="comment__header">
                        <img src=${resposta.profilePicture} alt="Profile Picture"/>
                        <span class="comment__username">${resposta.username}</span>
						${resposta.username === currentUser.username
            ? `
							<span class="comment__username-you">you</span>
							`
            : ""}
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

					${resposta.username === currentUser.username
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
						</button>`}

                </section>
            `)
            .join("");
        if (!commentsContainer)
            return;
        commentsContainer.innerHTML += `

				<dialog>
					<div class="modal__container">
						<h2>Delete comment</h2>
						<p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
						<button class="btnCancelDelete">No, Cancel</button>
						<button class="btnConfirmDelete">Yes, delete</button>					
					</div>
				</dialog>

                <div class="comment__container">
                    <section class="comment" id="${comentario.id}">
                        <div class="comment__header">
                            <img src=${comentario.profilePicture} alt="Profile Picture"/>
                            <span class="comment__username">${comentario.username}</span>
                            <span class="comment__date">${comentario.createdAt}</span>
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
                    ${comentario.replies.length === 0
            ? ""
            : `
                        <section class="comment__replies">
                            ${respostasHTML}
                        </section>
                    `}
                </div>
            `;
        renderModal();
        likeAndDislike();
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
    commentsContainer === null || commentsContainer === void 0 ? void 0 : commentsContainer.insertAdjacentHTML("beforeend", newCommentElement);
    // });
}
renderComments();
