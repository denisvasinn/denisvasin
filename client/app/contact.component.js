"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var message_1 = require("./message");
var message_service_1 = require("./message.service");
var ContactComponent = (function () {
    function ContactComponent(messageService) {
        this.model = new message_1.Message();
        this.submited = false;
        this.messageService = messageService;
    }
    ContactComponent.prototype.onSubmit = function () {
        this.submited = true;
        this.messageService.send(this.model)
            .subscribe(function (res) { return alert('successfully sent'); }, function (err) { return console.log(err); });
    };
    ContactComponent = __decorate([
        core_2.Component({
            moduleId: module.id,
            template: "\n    <div class=\"content\">\n      \n      <div class=\"container contact\">\n        <h3>Contact</h3>\n        <hr>\n        <div class=\"form-group\">\n          <label for=\"tel\">Call:</label>\n          <a id=\"tel\" href=\"tel:+79788869428\">+79788869428</a>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"ms\">Email:</label>\n          <a id=\"ms\" href=\"mailto:denis.vasin@outlook.com\">denis.vasin@outlook.com</a>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"sn\">Connect:</label>\n          <ul id=\"sn\">\n            <li id=\"vk\">\n              <a href=\"https://vk.com/id33770477\">VK</a>\n            </li>\n            <li id=\"fb\">\n              <a href=\"https://www.facebook.com/denis.vasin01\">Facebook</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n\n      <div class=\"container q-message\">\n        <h3>Quick Message</h3>\n        <hr>\n        <form (ngSubmit)=\"onSubmit()\" #messageForm=\"ngForm\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" id=\"name\"\n                  [(ngModel)]=\"model.name\" name=\"name\"\n                  #name=\"ngModel\"\n                  placeholder=\"Name\" >\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" id=\"subject\"\n                  [(ngModel)]=\"model.subject\" name=\"subject\"\n                  #subject=\"ngModel\"\n                  placeholder=\"Subject\" >\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" id=\"email\"\n                  [(ngModel)]=\"model.email\" name=\"email\"\n                  #email=\"ngModel\"\n                  placeholder=\"E-mail\" >\n          </div>\n          <div class=\"form-group\">\n            <textarea type=\"text\" class=\"form-control\" id=\"data\"\n                  [(ngModel)]=\"model.data\" name=\"data\"\n                  #data=\"ngModel\"\n                  placeholder=\"Message\"\n                  rows=\"5\" >\n            </textarea>\n          </div>\n\n          <div>\n            <input type=\"submit\" class=\"btn btn-default\" value=\"Submit\">\n          </div>\n        </form>\n      </div>\n    </div>\n  "
        }),
        __param(0, core_1.Inject(message_service_1.MessageService))
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
