"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        core_1.Component({
            template: "\n    <div class=\"content\">\n      <div class=\"photo-container\">\n        <img class=\"photo\" src=\"/images/photo.jpg\" alt=\"Photo\">\n      </div>\n      <div class=\"grt\">\n        <p> Ahoy there! My name is Denis. I am 22 years old and i am student. I am really like JavaScript.\n         If you want to see my projects please visit my \n          <a href=\"https://github.com/denisvasinn\">GitHub</a>.\n        </p>\n        <p> I will be glad to work with team or single customer. Want to work with me?\n          Drop me a line using the form or connect through social media\n          <a href=\"/#/contact\">here!</a>\n        </p>\n      </div>\n    </div>\n  "
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
