"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.onScroll = function (event) {
        this.scrolled = event.pageY;
    };
    AppComponent.prototype.smMenuClick = function (event) {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <header (window:scroll)=\"onScroll($event)\" [ngClass]=\"{scrolled: scrolled}\">\n    <nav class=\"nav-bar\">\n        <a class=\"logo\" href=\"#/home\">\n          <h1>DENIS VASIN</h1>\n        </a>\n        <a href=\"#\" id=\"small-menu\" class=\"nav-item\" (click)=\"smMenuClick($event)\">Menu</a>\n        <ul>\n            <li class=\"nav-item\"><a [routerLink]=\"['home']\">Home</a></li>\n            <li class=\"nav-item\"><a [routerLink]=\"['about']\">About</a></li>\n            <li class=\"nav-item\"><a [routerLink]=\"['contact']\">Contact</a></li>\n        </ul>\n      </nav>\n  </header>\n  <router-outlet></router-outlet>\n  <footer>\n    <p>2016 All rights reserved.</p>\n  </footer>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
