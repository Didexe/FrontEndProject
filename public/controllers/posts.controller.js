import template from '../js/templates';
import postsData from '../data/posts.data';
import MONTHS from '../js/utils/settings';

class PostsController {
    showPostPage(params) {
        const postId = params.post;
        Promise.all([
            postsData.getPost(postId),
            template.compileTemplate('post'),
            ])
            .then(([post, compiledTemplate]) => {
                document.getElementById('container').innerHTML = compiledTemplate(post);
            });
    }

    addNewComment(partialUrl) {
        const commentAuthor = document.getElementById('input-comment-user').value;
        const commentAuthorEmail = document.getElementById('input-comment-email').value;
        const commentText = document.getElementById('input-comment-text').value;
        const today = new Date();
        const commentAuthorImage = firebase.auth().currentUser.photoURL;
        const commentDate = MONTHS[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();
        const uris = partialUrl.split('/')
        const categoryName = uris[0];
        const postId = uris[1];
        let postNumbers;
        const newCommentKey = db.ref().child('comments').push().key;
        const commentData = {
            commentText,
            commentDate,
            commentAuthorEmail,
            commentAuthor,
            commentAuthorImage,
        };
        const updates = {};

        db.ref(`categories/${categoryName}/categoryPosts/${postId}`)
            .once('value')
            .then((snapshot) => {
                console.log(snapshot.val());
                postNumbers = snapshot.val().numberOfComments + 1;
                updates[`posts/${postId}/postComments/${newCommentKey}`] = commentData;
                updates[`comments/${newCommentKey}`] = commentData;
                updates[`posts/${postId}/numberOfComments`] = postNumbers;
                updates[`categories/${categoryName}/categoryPosts/${postId}/numberOfComments`] = postNumbers;
                db.ref().update(updates);
            })
            .then(() => {
                // showPostPage(postId);
                alert('New comment added');
            });
    }
}

const postsController = new PostsController;
export default postsController;
