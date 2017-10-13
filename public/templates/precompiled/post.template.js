import Handlebars from '../../lib/handlebars/runtime'; export default
Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.postComments : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <article class=\"comment\">\n                <div class=\"user-image-wrapper\">\n                    <img class=\"user-image\" src=\""
    + alias4(((helper = (helper = helpers.commentAuthorImage || (depth0 != null ? depth0.commentAuthorImage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"commentAuthorImage","hash":{},"data":data}) : helper)))
    + "\" alt=\"\"/>\n                    <div class=\"user-image-shadow\"></div>\n                </div>\n                <h2 class=\"heading username\">"
    + alias4(((helper = (helper = helpers.commentAuthor || (depth0 != null ? depth0.commentAuthor : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"commentAuthor","hash":{},"data":data}) : helper)))
    + "</h2>\n                <p class=\"post-date\">"
    + alias4(((helper = (helper = helpers.commentDate || (depth0 != null ? depth0.commentDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"commentDate","hash":{},"data":data}) : helper)))
    + "</p>\n                <p class=\"comment-text\">"
    + alias4(((helper = (helper = helpers.commentText || (depth0 != null ? depth0.commentText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"commentText","hash":{},"data":data}) : helper)))
    + "</p>\n                <button type=\"button\">Read more</button>\n            </article>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"breadcrumbs\">\n<p><a href=\"#home\">Home </a><span>&raquo; <a href=\"#categories/"
    + alias4(((helper = (helper = helpers.postCategory || (depth0 != null ? depth0.postCategory : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postCategory","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.postCategory || (depth0 != null ? depth0.postCategory : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postCategory","hash":{},"data":data}) : helper)))
    + " </a></span><span>&raquo; "
    + alias4(((helper = (helper = helpers.postTitle || (depth0 != null ? depth0.postTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postTitle","hash":{},"data":data}) : helper)))
    + "</span></p>\n</div>\n<div class=\"divider\"></div>\n<div id=\"quote\">\n    <h1>"
    + alias4(((helper = (helper = helpers.postTitle || (depth0 != null ? depth0.postTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postTitle","hash":{},"data":data}) : helper)))
    + "</h1>\n    <p>Posted by "
    + alias4(((helper = (helper = helpers.postAuthor || (depth0 != null ? depth0.postAuthor : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postAuthor","hash":{},"data":data}) : helper)))
    + " on "
    + alias4(((helper = (helper = helpers.postDate || (depth0 != null ? depth0.postDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postDate","hash":{},"data":data}) : helper)))
    + " in "
    + alias4(((helper = (helper = helpers.postCategory || (depth0 != null ? depth0.postCategory : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postCategory","hash":{},"data":data}) : helper)))
    + " Category</p>\n</div>\n<div class=\"divider\"></div>\n<div id=\"content-wrapper\">\n    <main id=\"post-wrapper\">\n        <div class=\"divider\"></div>\n        <p class=\"post-details\">Posted by<span> "
    + alias4(((helper = (helper = helpers.postAuthor || (depth0 != null ? depth0.postAuthor : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postAuthor","hash":{},"data":data}) : helper)))
    + "</span> on <span>"
    + alias4(((helper = (helper = helpers.postDate || (depth0 != null ? depth0.postDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postDate","hash":{},"data":data}) : helper)))
    + " </span>in <span>"
    + alias4(((helper = (helper = helpers.postCategory || (depth0 != null ? depth0.postCategory : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postCategory","hash":{},"data":data}) : helper)))
    + "</span> category | <span>"
    + alias4(((helper = (helper = helpers.numberOfComments || (depth0 != null ? depth0.numberOfComments : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"numberOfComments","hash":{},"data":data}) : helper)))
    + " </span>comments</p>\n        <div class=\"divider\"></div>\n        <section id=\"post\">\n            <div class=\"post-image-wrapper\">\n                <img class=\"post-image\" src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageUrl","hash":{},"data":data}) : helper)))
    + "\" alt=\"\"/>\n                <div class=\"post-image-shadow\"></div>\n            </div>\n            <p id=\"post-text\">"
    + alias4(((helper = (helper = helpers.postText || (depth0 != null ? depth0.postText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postText","hash":{},"data":data}) : helper)))
    + "</p>\n        </section>\n        <section class=\"post-comments\">\n            <h2 class=\"heading\"><span>"
    + alias4(((helper = (helper = helpers.numberOfComments || (depth0 != null ? depth0.numberOfComments : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"numberOfComments","hash":{},"data":data}) : helper)))
    + " </span> Comments</h2>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.postComments : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </section>\n        <section id=\"reply-form\">\n            <h2 class=\"heading\">Leave a Reply</h2>\n            <input id=\"input-comment-user\" type=\"text\" placeholder=\"Name\">\n            <input id=\"input-comment-email\" type=\"email\" placeholder=\"Email\">\n            <textarea id=\"input-comment-text\" name=\"message\" cols=\"30\" rows=\"10\" placeholder=\"Message\"></textarea>\n            <button id=\"comment-button\" type=\"button\" value=\""
    + alias4(((helper = (helper = helpers.postCategory || (depth0 != null ? depth0.postCategory : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postCategory","hash":{},"data":data}) : helper)))
    + "/"
    + alias4(((helper = (helper = helpers.postId || (depth0 != null ? depth0.postId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postId","hash":{},"data":data}) : helper)))
    + "\" onclick=\"addNewComment(value)\">Post comment</button>\n        </section>\n    </main>\n    <aside id=\"right-sidebar\">\n        <article class=\"links-widget\">\n            <h2 class=\"heading\">From the blog</h2>\n            <ul>\n                <li><a href=\"javascript:void(0)\">Consequat id anim sunt</a></li>\n                <li><a href=\"javascript:void(0)\">Aute proident dolore</a></li>\n                <li><a href=\"javascript:void(0)\">Exercitation amet</a></li>\n                <li><a href=\"javascript:void(0)\">Tempor magna nulla</a></li>\n                <li><a href=\"javascript:void(0)\">Tempor sunt excepteur</a></li>\n                <li><a href=\"javascript:void(0)\">Non aliquip nulla utr</a></li>\n            </ul>\n        </article>\n        <article class=\"links-widget\">\n            <h2 class=\"heading\">Archives</h2>\n            <ul>\n                <li><a href=\"javascript:void(0)\">Consequat id anim sunt</a></li>\n                <li><a href=\"javascript:void(0)\">Aute proident dolore</a></li>\n                <li><a href=\"javascript:void(0)\">Exercitation amet</a></li>\n                <li><a href=\"javascript:void(0)\">Tempor magna nulla</a></li>\n                <li><a href=\"javascript:void(0)\">Tempor sunt excepteur</a></li>\n                <li><a href=\"javascript:void(0)\">Non aliquip nulla utr</a></li>\n            </ul>\n        </article>\n        <article class=\"links-widget\">\n            <h2 class=\"heading\">Recent Posts</h2>\n            <ul>\n                <li><a href=\"javascript:void(0)\">Consequat id anim sunt</a></li>\n                <li><a href=\"javascript:void(0)\">Aute proident dolore</a></li>\n                <li><a href=\"javascript:void(0)\">Exercitation amet</a></li>\n                <li><a href=\"javascript:void(0)\">Tempor magna nulla</a></li>\n                <li><a href=\"javascript:void(0)\">Tempor sunt excepteur</a></li>\n                <li><a href=\"javascript:void(0)\">Non aliquip nulla utr</a></li>\n            </ul>\n        </article>\n    </aside>\n</div>";
},"useData":true})