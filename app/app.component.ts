import {Component, OnInit, HostListener} from '@angular/core';
import {NO_OF_SLIDE} from "./app-routing.module";
import {WindowRef} from "./windowRef";
import {Router} from "@angular/router";

const SLIDE_ROUTE_PREFIX = "/slide";
const SLIDES = ['Slide 1', 'Slide 2', 'Slide 3'];

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [WindowRef]
})
export class AppComponent  implements OnInit{
  blnRotateNavIcon = false;
  currentSlideNum = 1;
  totalSlides = NO_OF_SLIDE;
  nextSlide = SLIDE_ROUTE_PREFIX + (this.currentSlideNum + 1);
  previousSlide = SLIDE_ROUTE_PREFIX + this.currentSlideNum;
  sidebarMenuList : any[] = [];
  blnNavSideMenuOpen = false;
  blnFullScreenMode = false;

  constructor(private _windowRef : WindowRef,
              private _router :  Router){}

  showNextSlide(){
    if(this.currentSlideNum !== this.totalSlides){
      this.currentSlideNum++;
      this.nextSlide = SLIDE_ROUTE_PREFIX + (this.currentSlideNum + 1);
      this.previousSlide = SLIDE_ROUTE_PREFIX + (this.currentSlideNum - 1);
    }
  }

  showPreviousSlide(){
    if(this.currentSlideNum !== 1){
      this.currentSlideNum--;
      this.previousSlide = SLIDE_ROUTE_PREFIX + (this.currentSlideNum - 1);
      this.nextSlide = SLIDE_ROUTE_PREFIX + (this.currentSlideNum + 1);
    }
  }

  toggleNav(){
    if(!this.blnNavSideMenuOpen) this.openNav();
    else this.closeNav();
    this.blnNavSideMenuOpen = !this.blnNavSideMenuOpen;
  }

  openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  this.blnRotateNavIcon = true;
  }

  closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  this.blnRotateNavIcon = false;
  }

  updateBottomNav(currentSlide: number){
    this.currentSlideNum = currentSlide + 1;
    if(this.currentSlideNum !== this.totalSlides)
      this.nextSlide = SLIDE_ROUTE_PREFIX + (this.currentSlideNum + 1);
    if(this.currentSlideNum !== 1)
      this.previousSlide = SLIDE_ROUTE_PREFIX + (this.currentSlideNum - 1);
  }

  ngOnInit():any{
    this.buildSideBarMenu();
  }

  buildSideBarMenu(){
    for(let count = 0; count < this.totalSlides; count++){
      this.sidebarMenuList.push({
        path: SLIDE_ROUTE_PREFIX + (count + 1),
        displayLink: SLIDES[count]
      })
    }
  }

  gotoFullScreenMode():void{
    //definne document object
    let _document = this._windowRef.nativeWindow.document;

    if(_document.documentElement.requestFullscreen){
      _document.documentElement.requestFullscreen();
    }
    else if(_document.documentElement.mozRequestFullScreen){
      _document.documentElement.mozRequestFullScreen();
    }
    else if(_document.documentElement.webkitRequestFullScreen){
      _document.documentElement.webkitRequestFullScreen();
    }
    else if(_document.documentElement.msRequestFullscreen){
      _document.documentElement.msRequestFullscreen();
    }
    this.blnFullScreenMode = true;
  }

  exitFullScreenMode():void{
    //define document
    let _document = this._windowRef.nativeWindow.document;
    if (_document.exitFullscreen) {
      _document.exitFullscreen();
    }
    else if (_document.mozCancelFullScreen) {
      _document.mozCancelFullScreen();
    }
    else if (_document.webkitCancelFullScreen) {
      _document.webkitCancelFullScreen();
    }
    else if (_document.msExitFullscreen) {
      _document.msExitFullscreen();
    }
    this.blnFullScreenMode = false;
  }

  @HostListener('window:keyup', ['$event'])
  keyBoardInput(event:any):void{
    if(this.blnFullScreenMode){
      //front navigation on 'rightarrow',''downarrow' and 'spacebar
      if(event.keyCode == 39 || event.keyCode == 40 || event.keyCode == 32){
        this._router.navigate([this.nextSlide]);
        this.showNextSlide();
      }
      //back navigation on 'leftarrow' and 'uparrow
      else if(event.keyCode == 37 || event.keyCode == 38){
        this._router.navigate([this.previousSlide]);
        this.showPreviousSlide();
      }
    }
    //on press of F11 key, toggle blnFullScreenMode
    if(event.keyCode == 122){
      this.blnFullScreenMode = !this.blnFullScreenMode;
    }
  }
}
