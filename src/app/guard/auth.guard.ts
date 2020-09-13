import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import{AngularFireAuth} from "@angular/fire/auth";
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

//constructor para autenticar si alguien esta logeado
constructor( private AFauth:AngularFireAuth, private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.AFauth.authState.pipe(map(auth=> {
        /*console.log(auth);
        return false;*/
        if (isNullOrUndefined(auth)){
          this.router.navigate(['./login']);
          return false
        }else{
          return true;

        }
       // console.log(auth);
        //return false;
      }))
      
  
  }
  
}
