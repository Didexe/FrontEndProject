/* global firebase */
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
        const today = new Date();
        const uris = partialUrl.split('/');
        const categoryName = uris[0];
        const postId = uris[1];
        const comment = {
            commentAuthor: document.getElementById('input-comment-user').value,
            commentAuthorEmail: document.getElementById('input-comment-email').value,
            commentText: document.getElementById('input-comment-text').value,
            commentAuthorImage: firebase.auth().currentUser.photoURL,
            commentDate: MONTHS[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear(),
        };

        postsData.addComment(categoryName, postId, comment)
            .then(() => {
                // showPostPage(postId);
                alert('New comment added');
            });
    }
}

const postsController = new PostsController;
export default postsController;
