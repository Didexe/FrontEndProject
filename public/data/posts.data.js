import { db, storage } from './database';

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

    addPostComment() {

    }
}

const postData = new PostsData;
export default postData;
