import Handlebars from '../../lib/handlebars/runtime'; export default
Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <option selected disabled>select category</option>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.categories : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "    <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "    <option selected disabled>add category first</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<section id=\"add-slide\">\n    <h2>Add new slide</h2>\n    <input type=\"text\" id=\"input-slide-title\" placeholder=\"Slide Title\" required>\n    <textarea name=\"slide_text\" id=\"input-slide-text\" cols=\"30\" rows=\"10\"  placeholder=\"Slide Text\" required></textarea>\n    <input type=\"file\" name=\"input_slide_image\" id=\"input-slide-image\" required>\n    <button id=\"slide-button\" type=\"submit\" onclick=\"addNewSlide()\">Add slide</button>\n</section>\n<section id=\"add-category\">\n    <h2>Add new Category</h2>\n    <input type=\"text\" name=\"categoryname\" id=\"input-category-name\" placeholder=\"Category name\" required>\n    <textarea name=\"category_description\" id=\"input-category-description\" cols=\"30\" rows=\"10\"  placeholder=\"Category dascription\" required></textarea>\n    <button id=\"category-button\" type=\"submit\" onclick=\"addNewCategory()\">Add category</button>\n</section>\n<section id=\"add-post\">\n    <h2>Add new Post</h2>\n    <select type=\"text\" name=\"postcategory\" id=\"input-post-category\" placeholder=\"Post category\" required>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.categories : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "    </select>\n    <input type=\"text\" name=\"posttitle\" id=\"input-post-title\" placeholder=\"Post title\" required>\n    <textarea name=\"posttext\" id=\"input-post-text\" cols=\"30\" rows=\"10\" placeholder=\"Post text\" required></textarea>     \n    <input type=\"file\" name=\"input_post_image\" id=\"input-post-image\" required>\n    <button id=\"post-button\" type=\"submit\" onclick=\"addNewPost()\">Add post</button>\n</section>\n<section id=\"add-multimedia\">\n    <h2>Add new Multimedia</h2>\n    <textarea name=\"posttext\" id=\"input-multimedia-text\" cols=\"30\" rows=\"10\" placeholder=\"Multimedia text\" required></textarea> \n    <input type=\"file\" name=\"multimedia\" id=\"input-multimedia-image\" required>\n    <button id=\"multimedia-button\" type=\"submit\" onclick=\"addNewMultimedia()\">Add multimedia</button>\n</section>\n<section id=\"add-slide\">\n    <h2>Add new Article</h2>\n    <input type=\"text\" id=\"input-article-title\" placeholder=\"Article Title\" required>\n    <textarea name=\"article_text\" id=\"input-article-text\" cols=\"30\" rows=\"10\"  placeholder=\"Article Text\" required></textarea>\n    <input type=\"file\" name=\"input_article_image\" id=\"input-article-image\" required>\n    <button id=\"slide-button\" type=\"submit\" onclick=\"addNewArticle()\">Add article</button>\n</section>";
},"useData":true})