import Handlebars from '../../lib/handlebars/runtime'; export default
Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <a href=\"#categories/"
    + alias4(((helper = (helper = helpers.postCategory || (depth0 != null ? depth0.postCategory : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postCategory","hash":{},"data":data}) : helper)))
    + "/"
    + alias4(((helper = (helper = helpers.postId || (depth0 != null ? depth0.postId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postId","hash":{},"data":data}) : helper)))
    + "\"><h2 class=\"heading\">"
    + alias4(((helper = (helper = helpers.postTitle || (depth0 != null ? depth0.postTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postTitle","hash":{},"data":data}) : helper)))
    + "</h2></a>\n            <div class=\"divider\"></div>\n            <p class=\"post-details\">Posted by<span> "
    + alias4(((helper = (helper = helpers.postAuthor || (depth0 != null ? depth0.postAuthor : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postAuthor","hash":{},"data":data}) : helper)))
    + "</span> on <span>"
    + alias4(((helper = (helper = helpers.postDate || (depth0 != null ? depth0.postDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postDate","hash":{},"data":data}) : helper)))
    + " </span>in <span>"
    + alias4(((helper = (helper = helpers.postCategory || (depth0 != null ? depth0.postCategory : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postCategory","hash":{},"data":data}) : helper)))
    + "</span> category | <span>"
    + alias4(((helper = (helper = helpers.numberOfComments || (depth0 != null ? depth0.numberOfComments : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"numberOfComments","hash":{},"data":data}) : helper)))
    + " </span>comments</p>\n            <div class=\"divider\"></div>\n            <section id=\""
    + alias4(((helper = (helper = helpers.postId || (depth0 != null ? depth0.postId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postId","hash":{},"data":data}) : helper)))
    + "\" class=\"post\">\n                <div class=\"post-image-wrapper\">\n                    <img class=\"post-image\" src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageUrl","hash":{},"data":data}) : helper)))
    + "\" alt=\"\"/>\n                    <div class=\"post-image-shadow\"></div>\n                </div>\n                <p class=\"post-text\">"
    + alias4(((helper = (helper = helpers.postText || (depth0 != null ? depth0.postText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postText","hash":{},"data":data}) : helper)))
    + "</p>\n            </section>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.first),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "            <button id=\"category-page-button-"
    + alias2(alias1(depth0, depth0))
    + "\" class=\"category-page-button active\" onclick=\"window.location.href = '#categories/"
    + alias2(((helper = (helper = helpers.postCategory || (depth0 != null ? depth0.postCategory : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"postCategory","hash":{},"data":data}) : helper)))
    + "/page/"
    + alias2(alias1(depth0, depth0))
    + "'\" disabled>"
    + alias2(alias1(depth0, depth0))
    + "</button>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "            <button id=\"category-page-button-"
    + alias2(alias1(depth0, depth0))
    + "\" class=\"category-page-button\" onclick=\"window.location.href = '#categories/"
    + alias2(((helper = (helper = helpers.postCategory || (depth0 != null ? depth0.postCategory : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"postCategory","hash":{},"data":data}) : helper)))
    + "/page/"
    + alias2(alias1(depth0, depth0))
    + "'\">"
    + alias2(alias1(depth0, depth0))
    + "</button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"breadcrumbs\">\n    <p><a href=\"#home\">Home </a><span class=\"category-name\">&raquo; "
    + alias4(((helper = (helper = helpers.categoryName || (depth0 != null ? depth0.categoryName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"categoryName","hash":{},"data":data}) : helper)))
    + "</span></span></p>\n</div>\n<div class=\"divider\"></div>\n<div id=\"quote\">\n    <h1 id=\"category-name\">"
    + alias4(((helper = (helper = helpers.categoryName || (depth0 != null ? depth0.categoryName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"categoryName","hash":{},"data":data}) : helper)))
    + "</h1>\n    <p>"
    + alias4(((helper = (helper = helpers.categoryDescription || (depth0 != null ? depth0.categoryDescription : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"categoryDescription","hash":{},"data":data}) : helper)))
    + "</p>\n</div>\n<div class=\"divider\"></div>\n<div id=\"content-wrapper\">\n    <main id=\"post-wrapper\">\n        <div id=\"posts-section\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.categoryPosts : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n    <div id=\"pagination\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.categoryPages : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n    </main>\n    <aside id=\"right-sidebar\">\n        <article class=\"links-widget\">\n            <h2 class=\"heading\">From the blog</h2>\n            <ul>\n                <li><a href=\"javascript:void(0)\">Consequat id anim sunt</a></li>\n                <li><a href=\"javascript:void(0)\">Aute proident dolore</a></li>\n                <li><a href=\"javascript:void(0)\">Exercitation amet</a></li>\n                <li><a href=\"javascript:void(0)\">Tempor magna nulla</a></li>\n                <li><a href=\"javascript:void(0)\">Tempor sunt excepteur</a></li>\n                <li><a href=\"javascript:void(0)\">Non aliquip nulla utr</a></li>\n            </ul>\n        </article>\n        <article class=\"links-widget\">\n            <h2 class=\"heading\">Archives</h2>\n            <ul>\n                <li><a href=\"javascript:void(0)\">Consequat id anim sunt</a></li>\n                <li><a href=\"javascript:void(0)\">Aute proident dolore</a></li>\n                <li><a href=\"javascript:void(0)\">Exercitation amet</a></li>\n                <li><a href=\"javascript:void(0)\">Tempor magna nulla</a></li>\n                <li><a href=\"javascript:void(0)\">Tempor sunt excepteur</a></li>\n                <li><a href=\"javascript:void(0)\">Non aliquip nulla utr</a></li>\n            </ul>\n        </article>\n        <article class=\"links-widget\">\n            <h2 class=\"heading\">Recent Posts</h2>\n            <ul>\n                <li><a href=\"javascript:void(0)\">Consequat id anim sunt</a></li>\n                <li><a href=\"javascript:void(0)\">Aute proident dolore</a></li>\n                <li><a href=\"javascript:void(0)\">Exercitation amet</a></li>\n                <li><a href=\"javascript:void(0)\">Tempor magna nulla</a></li>\n                <li><a href=\"javascript:void(0)\">Tempor sunt excepteur</a></li>\n                <li><a href=\"javascript:void(0)\">Non aliquip nulla utr</a></li>\n            </ul>\n        </article>\n    </aside>\n</div>";
},"useData":true})