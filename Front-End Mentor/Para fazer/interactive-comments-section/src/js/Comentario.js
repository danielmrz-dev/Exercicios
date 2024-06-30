export default class Comentario {
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
        let counter = 0;
        while (counter < 1) {
            this.score - 1;
            counter = +1;
        }
    }
}
