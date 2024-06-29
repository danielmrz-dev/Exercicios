"use strict";
function renderComments() {
    getData().then((data) => {
        const comments = data.comments;
        const currentUser = data.currentUser;
        gerarComentarioHTML(comments);
    });
    function gerarComentarioHTML(comments) {
        comments.forEach((comment) => {
            const comentario = new Comentario(comment.id, comment.content, comment.createdAt, comment.score, comment.user.username, comment.user.image.png, comment.replies.map((reply) => new Comentario(reply.id, reply.content, reply.createdAt, reply.score, reply.user.username, reply.user.image.png, reply.replies || [], reply.replyingTo)));
            const respostasHTML = comentario.replies
                .map((resposta) => `
                <section class="comment" id="${resposta.id}">
                    <div class="comment__header">
                        <img src=${resposta.profilePicture} alt="Profile Picture"/>
                        <span class="comment__username">${resposta.username}</span>
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
                    <button class="comment__reply-btn">
                        <img src="images/icon-reply.svg" />
                        Reply                          
                    </button>
                </section>
            `)
                .join("");
            if (!commentsContainer)
                return;
            commentsContainer.innerHTML += `
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
    }
}
