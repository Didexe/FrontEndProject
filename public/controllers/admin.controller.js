/* global firebase,router */

import categoriesData from '../data/categories.data';
import slidesData from '../data/slides.data';
import postsData from '../data/posts.data';
import multimediaData from '../data/multimedia.data';
import articlesData from '../data/articles.data';
import template from '../js/templates';
import clearInputs from '../js/utils/clearInputs';
import settings from '../js/utils/settings';
import compiledTemplate from '../templates/precompiled/admin.template';

class AdminController {
    showAdminPage() {
        Promise.all([
            categoriesData.getCategoryNames(),
            // template.compileTemplate('admin'),
            ])
            .then(([categories]) => {
                document.getElementById('container').innerHTML = compiledTemplate(categories);
            });
    }

    addNewMultimedia() {
        const multimediaImage = document.getElementById('input-multimedia-image').files[0];
        const multimediaText = document.getElementById('input-multimedia-text').value;

        return multimediaData.addMultimedia(multimediaImage, multimediaText)
            .then(() => {
                clearInputs();
                alert('New multimedia added');
            });
    }

    addNewArticle() {
        const articleImage = document.getElementById('input-article-image').files[0];
        const articleTitle = document.getElementById('input-article-title').value;
        const articleText = document.getElementById('input-article-text').value;

        return articlesData.addArticle(articleImage, articleTitle, articleText)
            .then((message) => {
                clearInputs();
                alert('New article added');
            });
    }

    addNewSlide() {
        const slideImage = document.getElementById('input-slide-image').files[0];
        const slideTitle = document.getElementById('input-slide-title').value;
        const slideText = document.getElementById('input-slide-text').value;

        return slidesData.addSlide(slideImage, slideTitle, slideText)
            .then(() => {
                clearInputs();
                // this.showAdminPage();
                alert('New slide added');
            });
    }

    addNewCategory() {
        const category = {
            categoryName: document.getElementById('input-category-name').value,
            categoryDescription: document.getElementById('input-category-description').value,
            numberOfPosts: 0,
        };

        return categoriesData.addCategory(category)
            .then(() => {
                    this.showAdminPage();
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
            postDate: settings.MONTHS[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear(),
            numberOfComments: 0,
        };

        return postsData.addPost(post)
            .then(() => {
                clearInputs();
                alert('New post added');
            });
    }
}

const adminController = new AdminController;
export default adminController;
