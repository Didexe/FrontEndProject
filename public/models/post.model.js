class Post {
    constructor(postName, postImageUrl, postText, userId) {
        this.postId = idGenerator.generate();
        this.postUserId = userId;
        this.postName = postName;
        this.postImage = postImageUrl;
        this.postText = postText;
        this.postDate = Date();
        this.postComments = [];
    }
}

module.exports = {
    Post,
}