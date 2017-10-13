import Handlebars from '../../lib/handlebars/runtime'; export default
Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.first),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div id=\"slider-text-field-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"slider-text-field visible\">\n            <h2 class=\"heading\">"
    + alias4(((helper = (helper = helpers.slideTitle || (depth0 != null ? depth0.slideTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"slideTitle","hash":{},"data":data}) : helper)))
    + "</h2>\n            <p class=\"exerpt\">"
    + alias4(((helper = (helper = helpers.slideText || (depth0 != null ? depth0.slideText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"slideText","hash":{},"data":data}) : helper)))
    + "</p>\n            <a href=\"javascript:void(0)\">Read more</a>                        \n        </div>\n        <img id=\"slider-image-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"slider-image visible\" src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageUrl","hash":{},"data":data}) : helper)))
    + "\" alt=\"slider image\">\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div id=\"slider-text-field-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"slider-text-field hidden\">\n            <h2 class=\"heading\">"
    + alias4(((helper = (helper = helpers.slideTitle || (depth0 != null ? depth0.slideTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"slideTitle","hash":{},"data":data}) : helper)))
    + "</h2>\n            <p class=\"exerpt\">"
    + alias4(((helper = (helper = helpers.slideText || (depth0 != null ? depth0.slideText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"slideText","hash":{},"data":data}) : helper)))
    + "</p>\n            <a href=\"javascript:void(0)\">Read more</a>                        \n        </div>\n        <img id=\"slider-image-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"slider-image hidden\" src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageUrl","hash":{},"data":data}) : helper)))
    + "\" alt=\"slider image\">\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.first),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div id=\"control-bottom-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"control-bottom active\" onclick=\"slideSliderImages("
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + ")\"></div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div id=\"control-bottom-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"control-bottom\" onclick=\"slideSliderImages("
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + ")\"></div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <article class=\"article-exerpt\">\n            <h2 class=\"heading\">"
    + alias4(((helper = (helper = helpers.articleTitle || (depth0 != null ? depth0.articleTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"articleTitle","hash":{},"data":data}) : helper)))
    + "</h2>\n            <div class=\"image-wrapper\">\n                <img src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageUrl","hash":{},"data":data}) : helper)))
    + "\" alt=\"\"/>\n            </div>\n            <p class=\"exerpt\">"
    + alias4(((helper = (helper = helpers.articleText || (depth0 != null ? depth0.articleText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"articleText","hash":{},"data":data}) : helper)))
    + "</p>\n        </article>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isSmallerThan7 || (depth0 && depth0.isSmallerThan7) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.index),{"name":"isSmallerThan7","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <div class=\"media-item tooltip visible\"><span class=\"tooltip-text\">\n                    "
    + alias4(((helper = (helper = helpers.multimediaText || (depth0 != null ? depth0.multimediaText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"multimediaText","hash":{},"data":data}) : helper)))
    + "</span>\n                    <img src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageUrl","hash":{},"data":data}) : helper)))
    + "\" alt=\"Multimedia image\"/>\n                </div>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <div class=\"media-item tooltip hidden\"><span class=\"tooltip-text\">\n                    "
    + alias4(((helper = (helper = helpers.multimediaText || (depth0 != null ? depth0.multimediaText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"multimediaText","hash":{},"data":data}) : helper)))
    + "</span>\n                    <img src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageUrl","hash":{},"data":data}) : helper)))
    + "\" alt=\"Multimedia image\"/>\n                </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div id=\"slider\">\n    <div class=\"shadow-top\"></div>\n    <div id=\"slider-controls-left\" onclick=\"slideDirection(-1)\" ><i class=\"fa fa-angle-left fa-2x\" aria-hidden=\"true\"></i></div>\n    <div id=\"slider-images\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.slides : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n    <div id=\"slider-controls-right\" onclick=\"slideDirection(1)\" ><i class=\"fa fa-angle-right fa-2x\" aria-hidden=\"true\"></i></div>\n    <div class=\"shadow-bottom\"></div>\n    <div id=\"slider-controls-bottom\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.slides : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>\n<div class=\"divider\"></div>\n<div id=\"quote\">\n    <h1>\"Chameleon is an extremely versatile theme with a miriad of options and styles\"</h1>\n    <p>Et anim esse elit est officia nulla culpa ex id ipsum dolore proident velit.</p>\n</div>\n<div class=\"divider\"></div>\n<main id=\"main-home\">\n    <section id=\"articles\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.articles : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </section>\n    <section id=\"media\">\n        <article class=\"links-widget\">\n            <h2 class=\"heading\">From the blog</h2>\n            <ul>\n                <li><a href=\"javascript:void(0)\">Consequat id anim sunt</a></li>\n                <li><a href=\"javascript:void(0)\">Aute proident dolore</a></li>\n                <li><a href=\"javascript:void(0)\">Exercitation amet</a></li>\n                <li><a href=\"javascript:void(0)\">Tempor magna nulla</a></li>\n                <li><a href=\"javascript:void(0)\">Tempor sunt excepteur</a></li>\n                <li><a href=\"javascript:void(0)\">Non aliquip nulla utr</a></li>\n            </ul>\n        </article>\n        <article id=\"multi-media\">\n            <h2 class=\"heading\">Multi-media</h2>\n            <div id=\"media-wrapper\">\n                <div id=\"media-controls-left\" onclick=\"slideMultimediaImages('left')\"><i class=\"fa fa-angle-left fa-lg\" aria-hidden=\"true\"></i></div>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.multimedia : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                <div id=\"media-controls-right\" onclick=\"slideMultimediaImages('right')\"><i class=\"fa fa-angle-right fa-lg\" aria-hidden=\"true\"></i></div>\n            </div>\n        </article>\n    </section>\n</main>\n";
},"useData":true})