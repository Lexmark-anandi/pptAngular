import {Component, OnInit} from '@angular/core';
import {NO_OF_SLIDE} from "./app-routing.module";

const SLIDE_ROUTE_PREFIX = "/slide";
const SLIDES = ['Slide 1', 'Slide 2', 'Slide 3'];

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent  implements OnInit{
  blnRotateNavIcon = false;
  currentSlideNum = 1;
  totalSlides = NO_OF_SLIDE;
  nextSlide = SLIDE_ROUTE_PREFIX + (this.currentSlideNum + 1);
  previousSlide = SLIDE_ROUTE_PREFIX + this.currentSlideNum;
  sidebarMenuList : any[] = [];
  blnNavSideMenuOpen = false;

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
}
