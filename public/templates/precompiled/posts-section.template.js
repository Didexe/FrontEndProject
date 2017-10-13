import Handlebars from '../../lib/handlebars/runtime'; export default
Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <a href=\"#categories/"
    + alias4(((helper = (helper = helpers.postCategory || (depth0 != null ? depth0.postCategory : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postCategory","hash":{},"data":data}) : helper)))
    + "/"
    + alias4(((helper = (helper = helpers.postId || (depth0 != null ? depth0.postId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postId","hash":{},"data":data}) : helper)))
    + "\"><h2 class=\"heading\">"
    + alias4(((helper = (helper = helpers.postTitle || (depth0 != null ? depth0.postTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postTitle","hash":{},"data":data}) : helper)))
    + "</h2></a>\n    <div class=\"divider\"></div>\n    <p class=\"post-details\">Posted by<span> "
    + alias4(((helper = (helper = helpers.postAuthor || (depth0 != null ? depth0.postAuthor : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postAuthor","hash":{},"data":data}) : helper)))
    + "</span> on <span>"
    + alias4(((helper = (helper = helpers.postDate || (depth0 != null ? depth0.postDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postDate","hash":{},"data":data}) : helper)))
    + " </span>in <span>"
    + alias4(((helper = (helper = helpers.postCategory || (depth0 != null ? depth0.postCategory : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postCategory","hash":{},"data":data}) : helper)))
    + "</span> category | <span>"
    + alias4(((helper = (helper = helpers.numberOfComments || (depth0 != null ? depth0.numberOfComments : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"numberOfComments","hash":{},"data":data}) : helper)))
    + " </span>comments</p>\n    <div class=\"divider\"></div>\n    <section id=\""
    + alias4(((helper = (helper = helpers.postId || (depth0 != null ? depth0.postId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postId","hash":{},"data":data}) : helper)))
    + "\"  class=\"post\">\n        <div class=\"post-image-wrapper\">\n            <img class=\"post-image\" src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageUrl","hash":{},"data":data}) : helper)))
    + "\" alt=\"\"/>\n            <div class=\"post-image-shadow\"></div>\n        </div>\n        <p id=\"post-text\">"
    + alias4(((helper = (helper = helpers.postText || (depth0 != null ? depth0.postText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postText","hash":{},"data":data}) : helper)))
    + "</p>\n    </section>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.posts : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true})