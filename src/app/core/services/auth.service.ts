import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.state';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService: ApiService, store: Store<AppState>) { }

  login(user) {
    return this.httpService.post('Account/Login', user)
      .pipe(map(
        data => {
          return data;
        }
      ))
  }

  getToken(user) {
    return this.httpService.post('Token', user, '', true)
      .pipe(
        map(data => {
          return data;
        }
        ));
  }
}
