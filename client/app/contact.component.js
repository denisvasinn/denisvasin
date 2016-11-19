"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var message_1 = require('./message');
var ContactComponent = (function () {
    function ContactComponent() {
        this.model = new message_1.Message();
        this.submited = false;
    }
    ContactComponent.prototype.onSubmit = function () {
        this.submited = true;
        console.log(this.model);
    };
    ContactComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            template: "\n    <div class=\"content\">\n      <form (ngSubmit)=\"onSubmit()\" #messageForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"firstName\">First Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"firstName\"\n                required\n                [(ngModel)]=\"model.firstName\" name=\"firstName\"\n                #firstName=\"ngModel\"\n                placeholder=\"First Name\" >\n        </div>\n        <div class=\"form-group\">\n          <label for=\"lastName\">Last Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"lastName\"\n                required\n                [(ngModel)]=\"model.lastName\" name=\"lastName\"\n                #lastName=\"ngModel\"\n                placeholder=\"Last Name\" >\n        </div>\n        <div class=\"form-group\">\n          <label for=\"subject\">Subject</label>\n          <input type=\"text\" class=\"form-control\" id=\"subject\"\n                required\n                [(ngModel)]=\"model.subject\" name=\"subject\"\n                #subject=\"ngModel\"\n                placeholder=\"Subject\" >\n        </div>\n        <div class=\"form-group\">\n          <label for=\"email\">E-mail</label>\n          <input type=\"text\" class=\"form-control\" id=\"email\"\n                required\n                [(ngModel)]=\"model.email\" name=\"email\"\n                #email=\"ngModel\"\n                placeholder=\"E-mail\" >\n        </div>\n        <div class=\"form-group\">\n          <label for=\"message\">Message</label>\n          <textarea type=\"text\" class=\"form-control\" id=\"message\"\n                required\n                [(ngModel)]=\"model.message\" name=\"message\"\n                #message=\"ngModel\"\n                placeholder=\"Message\"\n                rows=\"10\" >\n          </textarea>\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n      </form>\n    </div>\n  "
        })
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
