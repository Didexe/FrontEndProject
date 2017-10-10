import db from './database';
import storage from './storage';
class ArticlesData {
    getArticles() {
        const articles = [];
        return db.ref().child('articles').once('value', (snapshot) => {
            snapshot.forEach((article) => {
                articles.push(article.val());
             });
         }).then(() => {
             return Promise.resolve(articles);
        });
    }

    addArticle(articleImage, articleTitle, articleText) {
        const uploadTask = storage.child(`articleimages/${articleImage.name}`).put(articleImage);

        return uploadTask.on('state_changed',
            (snapshot) => {
            },
            (error) => {
                alert(error);
            },
            () => {
            storage.child(`articleimages/${articleImage.name}`).getDownloadURL()
                .then((imageUrl) => {
                    db.ref().child(`articles/`).push({
                        articleTitle,
                        articleText,
                        imageUrl,
                    });
                });
        });
    }
}

const articlesData = new ArticlesData;
export default articlesData;
