import {Component} from "@angular/core";
import {routerTransition} from "./router.animation";
@Component({
  moduleId: module.id,
  selector: 'slide-two',
  templateUrl: 'slide2.component.html',
  styles:[`:host{
  color: green;
  background-color: #fff;
  overflow-y:hidden;
  height:78vh;
  font-size: 1.5em;
}`],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class SlideTwoComponent{

}
