import template from '../js/templates';
import categoriesData from '../data/categories.data';
import settings from '../js/utils/settings';
import categoryTemplate from '../templates/precompiled/category.template';
import categoryPageTemplate from '../templates/precompiled/category.template';
class CategoriesController {
    showCategoryPage(params) {
        const categoryName = params.category;
        Promise.all([
            categoriesData.getCategory(categoryName, settings.postsPerPage),
            // template.compileTemplate('category'),
            ])
            .then(([category]) => {
                console.log(category);
                document.getElementById('container').innerHTML = categoryTemplate(category);
            });
    }

    updateCategoryPage(requestedPage) {
        const currentPage = +document.getElementsByClassName('category-page-button active')[0].innerHTML;
        const categoryName = document.getElementById('category-name').innerHTML;
        Promise.all([
            categoriesData.getCategoryPostsPage(currentPage, requestedPage, postsPerPage, categoryName),
            // template.compileTemplate('posts-page'),
            ])
            .then(([posts]) => {
                document.getElementById('posts-page').innerHTML = categoryPageTemplate(posts);
                document.getElementById('category-page-button-' + currentPage).classList.remove('active');
                document.getElementById('category-page-button-' + currentPage).disabled = false;
                document.getElementById('category-page-button-' + requestedPage).classList.add('active');
                document.getElementById('category-page-button-' + requestedPage).disabled = true;
            });
    }
}

const categoryController = new CategoriesController;
export default categoryController;
