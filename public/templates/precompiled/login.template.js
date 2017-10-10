import Handlebars from '../../lib/handlebars/runtime'; export default
Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section id=\"login-user\">\n    <h2>Login user</h2>\n    <input type=\"email\" name=\"email\" id=\"login-email\" placeholder=\"Email\" required>\n    <input type=\"password\" name=\"password\" id=\"login-password\" placeholder=\"Password\" required>\n    <button id=\"login-button\" type=\"submit\" onclick=\"loginUser()\">Login</button>\n</section>";
},"useData":true})