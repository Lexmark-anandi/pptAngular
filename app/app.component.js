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
var core_1 = require('@angular/core');
var app_routing_module_1 = require("./app-routing.module");
var SLIDE_ROUTE_PREFIX = "/slide";
var SLIDES = ['Slide 1', 'Slide 2', 'Slide 3'];
var AppComponent = (function () {
    function AppComponent() {
        this.blnRotateNavIcon = false;
        this.currentSlideNum = 1;
        this.totalSlides = app_routing_module_1.NO_OF_SLIDE;
        this.nextSlide = SLIDE_ROUTE_PREFIX + (this.currentSlideNum + 1);
        this.previousSlide = SLIDE_ROUTE_PREFIX + this.currentSlideNum;
        this.sidebarMenuList = [];
        this.blnNavSideMenuOpen = false;
    }
    AppComponent.prototype.showNextSlide = function () {
        if (this.currentSlideNum !== this.totalSlides) {
            this.currentSlideNum++;
            this.nextSlide = SLIDE_ROUTE_PREFIX + (this.currentSlideNum + 1);
            this.previousSlide = SLIDE_ROUTE_PREFIX + (this.currentSlideNum - 1);
        }
    };
    AppComponent.prototype.showPreviousSlide = function () {
        if (this.currentSlideNum !== 1) {
            this.currentSlideNum--;
            this.previousSlide = SLIDE_ROUTE_PREFIX + (this.currentSlideNum - 1);
            this.nextSlide = SLIDE_ROUTE_PREFIX + (this.currentSlideNum + 1);
        }
    };
    AppComponent.prototype.toggleNav = function () {
        if (!this.blnNavSideMenuOpen)
            this.openNav();
        else
            this.closeNav();
        this.blnNavSideMenuOpen = !this.blnNavSideMenuOpen;
    };
    AppComponent.prototype.openNav = function () {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        this.blnRotateNavIcon = true;
    };
    AppComponent.prototype.closeNav = function () {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        this.blnRotateNavIcon = false;
    };
    AppComponent.prototype.updateBottomNav = function (currentSlide) {
        this.currentSlideNum = currentSlide + 1;
        if (this.currentSlideNum !== this.totalSlides)
            this.nextSlide = SLIDE_ROUTE_PREFIX + (this.currentSlideNum + 1);
        if (this.currentSlideNum !== 1)
            this.previousSlide = SLIDE_ROUTE_PREFIX + (this.currentSlideNum - 1);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.buildSideBarMenu();
    };
    AppComponent.prototype.buildSideBarMenu = function () {
        for (var count = 0; count < this.totalSlides; count++) {
            this.sidebarMenuList.push({
                path: SLIDE_ROUTE_PREFIX + (count + 1),
                displayLink: SLIDES[count]
            });
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map