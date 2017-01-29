import {Component} from "@angular/core";
import {routerTransition} from "./router.animation";
@Component({
  moduleId: module.id,
  selector: 'slide-two',
  templateUrl: 'slide2.component.html',
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class SlideTwoComponent{

}
