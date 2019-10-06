import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
@Injectable({
  providedIn: 'root'
})
export class LoginResolverService implements Resolve<any> {


  constructor(private fromApp: Store<AppState>) { }
  resolve(route: ActivatedRouteSnapshot,
    routeState: RouterStateSnapshot): any {
    return this.waitForLandingPageData(this);
  }

  waitForLandingPageData(ref): Promise<any> {
    return new Promise(function(resolve, reject) {
      ref.fromApp.select(state => state.landingPage.isLandingPageDataLoaded).subscribe((isLandingPageDataLoaded) => {
        if (isLandingPageDataLoaded) {
          resolve();
        } else {
          ref.dispatchLandingPageAction();
        }
      });
    })
  }
}
