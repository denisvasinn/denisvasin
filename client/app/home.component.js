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
            template: "\n    <div class=\"content\">\n      <img class=\"image\" src=\"/images/photo.jpg\" alt=\"Photo\">\n      <div>\n        <p>Hello! My name is Denis. According to Christian tradition, Saint Denis (also called Dionysius, Dennis, or Denys) is a Christian martyr and saint. In the third century, he was Bishop of Paris. He was martyred, with his companions Rusticus and Eleutherius, in connection with the Decian persecution of Christians, shortly after 250 AD. Denis is said to have picked his head up after being decapitated, walked ten kilometres (six miles), while preaching a sermon of repentance the entire way, making him one of many cephalophores in hagiology. He is venerated in the Roman Catholic Church as patron of Paris, France, and as one of the Fourteen Holy Helpers. The medieval and modern French name \"Denis\" derives from the ancient name Dionysius.</p>\n      </div>\n    </div>\n    <footer>\n      <p>2016 All rights reserved.</p>\n    </footer>\n  "
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
