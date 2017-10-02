class Post {
    constructor(postName, postImageUrl, postText) {
        // this.postId = idGenerator.generate();
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