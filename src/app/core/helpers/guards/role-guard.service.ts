import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { RouteMaps } from '../../constants/routeMaps';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate, CanLoad, CanActivateChild {
  isAuthorized = false;
  constructor(private store: Store<AppState>, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, Routerstate: RouterStateSnapshot) {
    return this.checkUserAccess(Routerstate);
  }

  canLoad(route: Route): Observable<boolean> {
    return this.checkUserAccess(route);
  }

  canActivateChild(route: ActivatedRouteSnapshot, Routerstate: RouterStateSnapshot) {
    console.log('CanActivateChild');
    return this.checkUserAccess(Routerstate);
  }

  checkUserAccess(Routerstate?) {
    return of(true)
  }

  isUserAuthorize(accessList, route) {
    let isAccessAllowed = false;
    const accessibleRoutes = [];
    accessList.forEach(component => {
      accessibleRoutes.push(RouteMaps[component]);
    });
    if (accessibleRoutes.indexOf(route.url) >= 0) {
      isAccessAllowed = true;
    }
    return isAccessAllowed;
  }
}
