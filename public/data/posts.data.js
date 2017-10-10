import db from './database';
import storage from './storage';

class PostsData {
    getPost(postId) {
        return db.ref('posts').child(postId).once('value')
            .then((snapshot) => {
                const post = snapshot.val();
                return Promise.resolve(post);
            });
    }

    addPost(post) {
        const uploadTask = storage.child(`postimages/${post.postTitle}/${post.postImage.name}`).put(post.postImage);

        uploadTask.on('state_changed',
            (snapshot) => {
            },
            (error) => {
                alert(error);
            },
            () => {
            storage.child(`postimages/${post.postTitle}/${post.postImage.name}`).getDownloadURL()
                .then((imageUrl) => {
                    const newPostKey = db.ref().child('posts').push().key;
                    post.postId =newPostKey;
                    const updates = {};
                    updates[`posts/${newPostKey}`] = post;
                    updates[`categories/${post.postCategory}/categoryPosts/${newPostKey}`] = post;

                    return db.ref().update(updates);
                });
            });
    }

    addComment(categoryName, postId, comment) {
        let commentsNumber;
        const newCommentKey = db.ref().child('comments').push().key;
        const updates = {};

        db.ref(`categories/${categoryName}/categoryPosts/${postId}`)
            .once('value')
            .then((snapshot) => {
                console.log(snapshot.val());
                commentsNumber = snapshot.val().numberOfComments + 1;
                updates[`posts/${postId}/postComments/${newCommentKey}`] = comment;
                updates[`comments/${newCommentKey}`] = comment;
                updates[`posts/${postId}/numberOfComments`] = commentsNumber;
                updates[`categories/${categoryName}/categoryPosts/${postId}/numberOfComments`] = commentsNumber;
                db.ref().update(updates);
            });
    }
}

const postData = new PostsData;
export default postData;
