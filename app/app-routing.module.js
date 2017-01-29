"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var slide1_component_1 = require("./slide1.component");
var slide2_component_1 = require("./slide2.component");
var slide3_component_1 = require("./slide3.component");
var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'slide1' },
    { path: 'slide1', component: slide1_component_1.SlideOneComponent },
    { path: 'slide2', component: slide2_component_1.SlideTwoComponent },
    { path: 'slide3', component: slide3_component_1.SlideThreeComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.routableComponents = [
    slide1_component_1.SlideOneComponent,
    slide2_component_1.SlideTwoComponent,
    slide3_component_1.SlideThreeComponent
];
exports.NO_OF_SLIDE = routes.length - 1;
//# sourceMappingURL=app-routing.module.js.map