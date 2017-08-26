"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div class=\"content resume\">\n    <div>\n      <h3>Web Developer</h3>\n      <hr>\n      <ul>\n        <li><p>Junior Web developer able to build a Web presence from the ground up -- from concept, navigation, layout and programming to UX and SEO\u0097</p></li>\n        <li><p>Skilled at writing well-designed, testable and efficient code using current best practices in Web development</p></li>\n        <li><p>Fast learner, hard worker and team player who is proficient in an array of scripting languages and multimedia Web tools</p></li>\n      </ul>\n    </div>\n    <div>\n      <h3>Technical Toolbox</h3>\n      <hr>\n      <p>JavaScript, jQuery, CSS, PHP, HTML, Angular 2, Bootstrap, C#, .Net, MySQL, MongoDB, GitHub, Gulp, REST</p>\n    </div>\n    <div>\n      <h3>Education</h3>\n      <hr>\n      <p>V.I. Vernadsky Crimean Federal University. Physics and Technology Institute 2016-2018</p>\n    </div>\n  </div>\n  "
        })
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
