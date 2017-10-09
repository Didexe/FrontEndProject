import slidesData from '../data/slides.data';
import articlesData from '../data/articles.data';
import multimediaData from '../data/multimedia.data';
import template from '../js/templates';

class HomeControler {
    showHomePage() {
        Promise.all([
            slidesData.getSlides(),
            articlesData.getArticles(),
            multimediaData.getMultimedia(),
            template.compileTemplate('home'),
            ])
            .then(([slides, articles, multimedia, compiledTemplate]) => {
                const homeData = {
                    slides: slides,
                    articles: articles,
                    multimedia: multimedia,
                };
                document.getElementById('container').innerHTML = compiledTemplate(homeData);
            });
    }
}

export default HomeControler;
