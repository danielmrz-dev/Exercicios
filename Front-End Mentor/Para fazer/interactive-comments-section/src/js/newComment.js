import { data } from "./data.js";
import renderComments from "./app.js";
export default function createNewComment() {
    const submitBtn = document.querySelector(".new__comment-submit");
    const textarea = document.querySelector(".new__comment-content");
    submitBtn === null || submitBtn === void 0 ? void 0 : submitBtn.addEventListener("click", (evento) => {
        evento.preventDefault();
        const newId = Number((Math.random() * 1000).toFixed(0));
        const profilePicture = data.currentUser.image.png;
        const createdAt = "Just now";
        const score = 0;
        const content = textarea.value;
        const replies = [];
        if (textarea.value.length !== 0) {
            data.comments.push({
                id: newId,
                content: content,
                createdAt: createdAt,
                score: score,
                user: {
                    image: {
                        webp: "",
                        png: profilePicture,
                    },
                    username: data.currentUser.username,
                },
                replies: replies,
            });
            renderComments();
        }
    });
}
