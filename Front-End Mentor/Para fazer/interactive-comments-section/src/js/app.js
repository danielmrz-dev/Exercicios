var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import handleModal from "./modal.js";
handleModal();
const commentsContainer = document.querySelector(".comments");
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const api = yield fetch("data.json");
        const response = yield api.json();
        return response;
    });
}
function renderComments() {
    getData().then((data) => {
        const comments = data.comments;
        comments.forEach((comment) => {
            if (!commentsContainer)
                return;
            commentsContainer.innerHTML += `
                <div class="comment__container" id="${comment.id}">

                    <section class="comment">
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
                                <button class="comment__likes-btn">
                                    +
                                </button>
                                <span>${comment.score}</span>
                                <button class="comment__likes-btn">
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
                






            <section class="comment__replies">			

				<section class="comment">

					<div class="comment__header">
						<img src=${comment.replies.forEach((reply) => reply.user.image.png)} alt="Profile Picture"/>
						<span class="comment__username">maxblagun</span>
						<span class="comment__date">2 weeks ago</span>
					</div>
	
					<p class="comment__content">
						Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React?
					</p>
	
					<div class="comment__likes">
						<div class="comment__likes-box">
							<button class="comment__likes-btn">
								+
							</button>
							<span>12</span>
							<button class="comment__likes-btn">
								-
							</button>
						</div>
	
					</div>
					<button class="comment__reply-btn">
						<img src="images/icon-reply.svg" />
						Reply							
					</button>
	
	
				</section>

				<section class="comment comment-you">

					<div class="comment__header comment__header-you">
						<img src="images/avatars/image-amyrobson.png" alt="Profile Picture"/>
						<span class="comment__username">amyrobson</span>
						<span class="comment__username-you">you</span>
						<span class="comment__date">2 months ago</span>
					</div>

					<p class="comment__content">
						Impressive! Though it seems the drag feature could be
						improved. But overall it looks incredible. You've nailed the
						design and the responsiveness at various breakpoints works
						really well.
					</p>

					<button class="comment__content-update">
						Update
					</button>

					<div class="comment__likes">
						<div class="comment__likes-box">
							<button class="comment__likes-btn">
								+
							</button>
							<span>12</span>
							<button class="comment__likes-btn">
								-
							</button>
						</div>

					</div>
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
				</section>

				

            </section>
            `;
        });
        // const currentUser:
    });
}
renderComments();
