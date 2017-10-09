import Handlebars from 'lib';

Handlebars.registerHelper('isSmallerThan7', function(index, options) {
    if (index < 7) {
        return options.fn(this);
    }
    return options.inverse(this);
 });
class Template {
    constructor() {
        this.cacheObj = {};
    }
    compileTemplate(templateName) {
        let compiledTemplate;
        if (this.cacheObj.hasOwnProperty(templateName)) {
          return Promise.resolve(this.cacheObj[templateName]);
        }

        return fetch(`../templates/${templateName}.handlebars`)
        .then((response) => {
            response.text()
                .then((html) => {
                    compiledTemplate = Handlebars.compile(html);
                    this.cacheObj[templateName] = compiledTemplate;
                });
        }).then(() => {
            return Promise.resolve(compiledTemplate);
        });
    }
}

const template = new Template;
export default template;
