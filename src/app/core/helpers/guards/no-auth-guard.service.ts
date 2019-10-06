import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private fromApp: Store<AppState>
  ) { }

  canActivate(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) {
    return true;
  }
}
