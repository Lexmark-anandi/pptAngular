import {Component} from "@angular/core";
import {routerTransition} from "./router.animation";
@Component({
  moduleId: module.id,
  selector: 'slide-three',
  templateUrl: 'slide3.component.html',
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class SlideThreeComponent{

}
