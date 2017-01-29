
import {Component} from "@angular/core";
import {routerTransition} from "./router.animation";
@Component({
  moduleId: module.id,
  selector: 'slide-one',
  templateUrl: 'slide1.component.html',
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class SlideOneComponent{

}
