import slidesData from '../data/slides.data';
import articlesData from '../data/articles.data';
import multimediaData from '../data/multimedia.data';
import template from '../js/templates';
import compiledTemplate from '../templates/precompiled/home.template';
import Handlebars from '../lib/handlebars/runtime'

// console.log(compiledTemplate);
Handlebars.registerHelper('isSmallerThan7', function(index, options) {
    if (index < 7) {
        return options.fn(this);
    }
    return options.inverse(this);
 });
class HomeControler {
    showHomePage() {
        Promise.all([
            slidesData.getSlides(),
            articlesData.getArticles(),
            multimediaData.getMultimedia(),
            // template.compileTemplate('home'),
            ])
            .then(([slides, articles, multimedia]) => {
                const homeData = {
                    slides: slides,
                    articles: articles,
                    multimedia: multimedia,
                };
                return Promise.resolve(compiledTemplate(homeData))
                    .then((html) => {
                    document.getElementById('container').innerHTML = html;
                    // const script = document.createElement('script');
                    // script.type = 'text/javascript';
                    // script.src = '../js/utils/mainSlider.js';
                    // document.body.appendChild(script);
                })
            });
    }
}
const homeController = new HomeControler;
export default homeController;

