import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SlideOneComponent} from "./slide1.component";
import {SlideTwoComponent} from "./slide2.component";
import {SlideThreeComponent} from "./slide3.component";
import {CanActivateAuthGuard} from "./can-activate.service";

const routes : Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'slide1'},
  {path:'slide1', component: SlideOneComponent},
  {path:'slide2', component: SlideTwoComponent},
  {path:'slide3', component: SlideThreeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}

export const routableComponents = [
  SlideOneComponent,
  SlideTwoComponent,
  SlideThreeComponent
];

export const NO_OF_SLIDE = routes.length - 1;
