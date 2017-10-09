class User {
    constructor(username, email, userImage, password) {
        this.username = username;
        this.email = emial;
        this.userImage = userImage;
        this.password = encriptor.encript(password)
        this.userPosts = [];
    }
}

module.exports = {
    User,
}