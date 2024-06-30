"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const commentsContainer = document.querySelector(".comments");
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const api = yield fetch("data.json");
        const response = yield api.json();
        return response;
    });
}
class Comentario {
    constructor(id, content, createdAt, score, username, profilePicture, replies, replyingTo) {
        this.id = id;
        this.content = content;
        this.createdAt = createdAt;
        this.score = score;
        this.username = username;
        this.profilePicture = profilePicture;
        this.replies = replies;
        this.replyingTo = replyingTo;
    }
    like() {
        let counter = 0;
        while (counter < 1) {
            this.score + 1;
            counter = +1;
        }
    }
    dislike() {
        this.score = -1;
        let counter = 0;
        while (counter < 1) {
            this.score - 1;
            counter = +1;
        }
    }
}
function renderComments() {
    getData().then((data) => {
        const comments = data.comments;
        const currentUser = data.currentUser;
        comments.forEach((comment) => {
            const comentario = new Comentario(comment.id, comment.content, comment.createdAt, comment.score, comment.user.username, comment.user.image.png, comment.replies.map((reply) => new Comentario(reply.id, reply.content, reply.createdAt, reply.score, reply.user.username, reply.user.image.png, reply.replies || [], reply.replyingTo)));
            const respostasHTML = comentario.replies.map(resposta => `
                <section class="comment" id="${resposta.id}">
                    <div class="comment__header">
                        <img src=${resposta.profilePicture} alt="Profile Picture"/>
                        <span class="comment__username">${resposta.username}</span>
						${resposta.username === currentUser.username ? `
							<span class="comment__username-you">you</span>
							` : ""}
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

					${resposta.username === currentUser.username ? `
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
						
						` : `
						<button class="comment__reply-btn">
							<img src="images/icon-reply.svg" />
							Reply							
						</button>`}

                </section>
            `).join('');
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
                    ${comentario.replies.length === 0 ? "" : `
                        <section class="comment__replies">
                            ${respostasHTML}
                        </section>
                    `}
                </div>
            `;
            const modal = document.querySelector("dialog");
            document.addEventListener("click", (event) => {
                const target = event.target;
                if (target.closest(".comment__delete")) {
                    modal === null || modal === void 0 ? void 0 : modal.showModal();
                }
            });
            const likeBtn = document.querySelectorAll(".like");
            likeBtn.forEach((btn) => {
                btn.addEventListener("click", () => {
                    var _a;
                    const idHTML = Number((_a = btn.closest(".comment")) === null || _a === void 0 ? void 0 : _a.id);
                    const comentarioNoObjeto = comments.filter(comentario => comentario.id === idHTML);
                    console.log(comentarioNoObjeto);
                    //= CONTINUAR AQUI COM A LÓGICA DOS BOTÕES DE LIKE E DISLIKE
                });
            });
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
    });
}
renderComments();
function renderComment() {
    getData().then((data) => {
        const comments = data.comments;
        const currentUser = data.currentUser;
        comments.forEach((comment) => {
            if (!commentsContainer)
                return;
            const replies = comment.replies.map((reply) => `

				<section class="comment" id="${reply.id}">

					<div class="comment__header">
						<img src="${reply.user.image.png}" alt="Profile Picture"/>
						<span class="comment__username">${reply.user.username}</span>
						${reply.user.username === currentUser.username ? `
							<span class="comment__username-you">you</span>
							` : ""}
						<span class="comment__date">${reply.createdAt}</span>
					</div>
	
					<p class="comment__content">
						<strong class="comment__replyingTo">@${reply.replyingTo}</strong>
						${reply.content}
					</p>
					
					<div class="comment__likes">
						<div class="comment__likes-box">
							<button class="comment__likes-btn like">
							+
							</button>
							<span>${reply.score}</span>
							<button class="comment__likes-btn dislike">
								-
							</button>
						</div>
					</div>

					${reply.user.username === currentUser.username ? `
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
						
						` : `
						<button class="comment__reply-btn">
							<img src="images/icon-reply.svg" />
							Reply							
						</button>`}
	
				</section>
				<div class="comment-reply reply">
					<img src="images/avatars/image-juliusomo.png">
					<textarea name="" id="" rows="4" placeholder="Add a comment..."></textarea>
					<button class="comment__btn-confirm-reply">Reply</button>
				</div>

			`).join("");
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

                    <section class="comment" id="${comment.id}">
                        <div class="comment__header">
                            <img src=${comment.user.image.png} alt="Profile Picture"/>
                            <span class="comment__username">${comment.user.username}</span>
                            <span class="comment__date">${comment.createdAt}</span>
                        </div>
                        <p class="comment__content">
						${comment.content}
                        </p>
                        <div class="comment__likes">
                            <div class="comment__likes-box">
                                <button class="comment__likes-btn like">
									+
                                </button>
                                <span>${comment.score}</span>
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
					
					</div>
					
					${comment.replies.length <= 0 ? "" : `
						<section class="comment__replies">
							${replies}
						</section>
						`}	

					<div class="comment-reply">
						<img src="images/avatars/image-juliusomo.png">
						<textarea name="" id="" rows="4" placeholder="Add a comment..."></textarea>
						<button class="comment__btn-confirm-reply">Reply</button>
					</div>

			`;
            const modal = document.querySelector("dialog");
            document.addEventListener("click", (event) => {
                const target = event.target;
                if (target.closest(".comment__delete")) {
                    modal === null || modal === void 0 ? void 0 : modal.showModal();
                }
            });
            const likeBtn = document.querySelectorAll(".like");
            likeBtn.forEach((btn) => {
                btn.addEventListener("click", () => {
                    const id = btn.closest(".comment").id;
                    console.log(id + " e " + comment.id);
                });
            });
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
    });
}
// renderComments();
