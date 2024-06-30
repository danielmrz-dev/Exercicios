export default class Comentario {
	id: number;
	content: string;
	createdAt: string;
	score: number;
	username: string;
	profilePicture: string;
	replies: Comentario[];
	replyingTo?: string;

	constructor(id: number, content: string, createdAt: string, score: number, username: string, profilePicture: string, replies: Comentario[], replyingTo?: string) {
		this.id = id;
		this.content = content;
		this.createdAt = createdAt;
		this.score = score;
		this.username = username;
		this.profilePicture = profilePicture;
		this.replies = replies;
		this.replyingTo = replyingTo;
		
	}

	like(): void {
		let counter = 0
		while (counter < 1) {
			this.score + 1;			
			counter =+ 1
		}
	}
	
	dislike(): void {
		let counter = 0
		while (counter < 1) {
			this.score - 1;			
			counter =+ 1;
		}
	}
}
