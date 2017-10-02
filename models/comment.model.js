class Comment {
    constructor(postId, userId, commentText) {
        this.commentId = idGenerator.generate();
        this.postId = postId;
        this.userId - userId;
        this.commentText = commentText;
        this.replies = [];
    }
}

module.exports = {
    Comment,
}