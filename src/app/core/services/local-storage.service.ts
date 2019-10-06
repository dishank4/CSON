import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getItem(key) {
    return window.localStorage.getItem(key);
  }

  setItem(key, value) {
    window.localStorage[key] = JSON.stringify(value);
  }

  removeItem(key) {
    window.localStorage.removeItem(key);
  }

  clear() {
    window.localStorage.clear();
  }
}
