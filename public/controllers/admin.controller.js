/* global firebase,router */

import categoriesData from '../data/categories.data';
import slidesData from '../data/slides.data';
import postsData from '../data/posts.data';
import multimediaData from '../data/multimedia.data';
import articlesData from '../data/article.data';
import template from '../js/templates';
import clearInputs from '../js/utils/clearInputs';
import MONTHS from '../js/utils/settings';

class AdminController {
    showAdminPage() {
        Promise.all([
            categoriesData.getCategoryNames(),
            template.compileTemplate('admin'),
            ])
            .then(([categories, compiledTemplate]) => {
                document.getElementById('container').innerHTML = compiledTemplate(categories);
            });
    }

    addNewMultimedia() {
        const multimediaImage = document.getElementById('input-multimedia-image').files[0];
        const multimediaText = document.getElementById('input-multimedia-text').value;

        multimediaData.addMultimedia(multimediaImage, multimediaText)
            .then(() => {
                clearInputs();
                alert('New multimedia added');
            });
    }

    addNewArticle() {
        const articleImage = document.getElementById('input-article-image').files[0];
        const articleTitle = document.getElementById('input-article-title').value;
        const articleText = document.getElementById('input-article-text').value;

        articlesData.addArticle(articleImage, articleTitle, articleText)
            .then(() => {
                clearInputs();
                alert('New article added');
            });
    }

    addNewSlide() {
        const slideImage = document.getElementById('input-slide-image').files[0];
        const slideTitle = document.getElementById('input-slide-title').value;
        const slideText = document.getElementById('input-slide-text').value;

        slidesData.addSlide(slideImage, slideTitle, slideText)
            .then(() => {
                clearInputs();
                alert('New slide added');
            });
    }

    addNewCategory() {
        const category = {
            categoryName: document.getElementById('input-category-name').value,
            categoryDescription: document.getElementById('input-category-description').value,
            numberOfPosts: 0,
        };

        categoriesData.addCategory(category)
        .then(() => {
                // router.navigate('admin/addcategory');
                alert('New category added');
            });
    }

    addNewPost() {
        const today = new Date();
        const post = {
            postImage: document.getElementById('input-post-image').files[0],
            postTitle: document.getElementById('input-post-title').value,
            postText: document.getElementById('input-post-text').value,
            postCategory: document.getElementById('input-post-category').value,
            userId: firebase.auth().currentUser.uid,
            postAuthor: firebase.auth().currentUser.displayName,
            postDate: MONTHS[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear(),
            numberOfComments: 0,
        };

        postsData.addPost(post)
            .then(() => {
                clearInputs();
                alert('New post added');
            });
    }
}

const adminController = new AdminController;
export default adminController;
