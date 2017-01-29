
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class CanActivateAuthGuard implements CanActivate{
  constructor(private _router : Router){}
  canActivate(next : ActivatedRouteSnapshot, state: RouterStateSnapshot){
    this._router.navigate(['/slide3']);
    return true;
  }

}
