const cacheObj = {};

function loadTemplate(templateName) {
    let compiledTemplate;
    if(cacheObj.hasOwnProperty(templateName)) {
      return Promise.resolve(cacheObj[templateName]);
    }
    
    return fetch(`../templates/${templateName}.handlebars`)
    .then((response) => {
        response.text()
            .then((html) => {
                compiledTemplate = Handlebars.compile(html);
                cacheObj[templateName] = compiledTemplate;
            })
    }).then(() => {
        return Promise.resolve(compiledTemplate);
    })
}
