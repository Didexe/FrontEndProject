import db from './database';
class CategoriesData {
    addCategory(category) {
        return db.ref().child(`categories/${category.categoryName}`)
            .once('value')
            .then((snapshot) => {
                if (snapshot.exists()) {
                    alert('Category already exists!');
                } else {
                    db.ref(`categories/`).child(category.categoryName).set(category);
                }
            });
    }
    getCategoryNames() {
        const names = [];
        return db.ref().child('categories').once('value', (snapshot) => {
            snapshot.forEach((category) => {
               names.push(category.val().categoryName);
            });
        }).then(() => {
            return Promise.resolve({ categories: names });
        });
    }
    getCategory(categoryName, postsPerPage) {
        let categoryPosts;
        let numberOfPages;
        const pages = [];
        db.ref('categories/').child(categoryName).child('categoryPosts').orderByKey().limitToFirst(postsPerPage)
            .once('value')
            .then((snapshot) => {
                categoryPosts = snapshot.val();
            });
        db.ref(`categories/${categoryName}`).child('numberOfPosts').once('value')
        .then((snapshot) => {
            numberOfPages = Math.ceil(snapshot.val() / postsPerPage);
            for (let i = 1; i <= numberOfPages; i += 1) {
                pages.push(i);
            }
        });

        return db.ref(`categories/${categoryName}`).child('categoryDescription').once('value')
            .then((snapshot) => {
                const category = {};
                category.categoryName = categoryName;
                category.categoryDescription = snapshot.val();
                category.categoryPosts = categoryPosts;
                category.categoryPages = pages;
                return Promise.resolve(category);
        });
    }

    getCategoryPostsPage(currentPage, requestedPage, postsPerPage, categoryName) {
        let categoryPosts;
        if (requestedPage > currentPage) {
            const startId = document.getElementsByClassName('post')[postsPerPage-1].id;
            return db.ref('categories/').child(categoryName).child('categoryPosts').orderByKey().startAt(startId).limitToFirst(postsPerPage + 1)
                .once('value', (snapshot) => {
                    console.log(snapshot);
                    categoryPosts = snapshot.val();
                    delete categoryPosts[startId];
                })
                .then(() => {
                    return Promise.resolve({ posts: categoryPosts });
                });
        }
            const endId = document.getElementsByClassName('post')[0].id;
            return db.ref('categories/').child(categoryName).child('categoryPosts').orderByKey().endAt(endId).limitToLast(postsPerPage + 1)
                .once('value', (snapshot) => {
                    console.log(snapshot);
                    categoryPosts = snapshot.val();
                    delete categoryPosts[endId];
                })
                .then(() => {
                    return Promise.resolve({ posts: categoryPosts });
                });
    }
}

const categoriesData = new CategoriesData;
export default categoriesData;
