import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CosnService {

  constructor(private apiService: ApiService) { }

  getBaseData(){
    return this.apiService.json('assets/JSON/steps-data.json')
  }
}
