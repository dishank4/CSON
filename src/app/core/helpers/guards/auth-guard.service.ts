import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/store/app.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad, CanActivateChild {

  constructor(private store: Store<AppState>, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, Routerstate: RouterStateSnapshot) {
    console.log('CanActivate');
    return this.validateUser(route);
  }

  canLoad(route: Route): Observable<boolean> {
    console.log('CanLoad');
    return this.validateUser(route);
  }

  canActivateChild(route: ActivatedRouteSnapshot, Routerstate: RouterStateSnapshot) {
    console.log('CanActivateChild');
    return this.validateUser(route);
  }

  private validateUser(route): Observable<boolean> {
    console.log('Route : ', route);
    return of(true)
  }
}
