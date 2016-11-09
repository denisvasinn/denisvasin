"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var app_component_1 = require('./app.component');
var navigation_component_1 = require('./navigation.component');
var home_component_1 = require('./home.component');
var about_component_1 = require('./about.component');
var contacts_component_1 = require('./contacts.component');
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'contacts', component: contacts_component_1.ContactsComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(routes)
            ],
            declarations: [
                app_component_1.AppComponent,
                navigation_component_1.NavigationComponent,
                home_component_1.HomeComponent,
                about_component_1.AboutComponent,
                contacts_component_1.ContactsComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
