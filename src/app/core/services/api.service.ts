import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  get(path: string, params: HttpParams = new HttpParams(), externalUrlDomail: string = ''): Observable<any> {
    if (externalUrlDomail) {
      return this.http.get(`${externalUrlDomail}${path}`, { params }).pipe(catchError(error => of(error)));
    } else {
      return this.http.get(`${environment.serviceUrl}${path}`, { params }).pipe(catchError(error => of(error)));
    }
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.serviceUrl}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(error => of(error)));
  }

  post(path: string, body: Object = {}, externalUrlDomain?: string, isFormData: boolean = false): Observable<any> {
    if (!isFormData) {
      body = JSON.stringify(body);
    }
    if (externalUrlDomain) {
      return this.http.post(`${externalUrlDomain}${path}`, body).pipe(catchError(error => of(error)));
    } else {

      return this.http.post(`${environment.serviceUrl}${path}`, body).pipe(catchError(error => of(error)));
    }
  }

  mulitipartForm(path: string, body, isContentJson?): Observable<any> {
    const formData = new FormData();
    formData.append('file', body);
    return this.http.post(
      `${environment.serviceUrl}${path}`,
      formData,
      isContentJson ? { headers: { 'Content-Type': 'multipart/form-data' } } : {}
    ).pipe(map(
      data => {
        return data;
      }
    ),
      catchError(error => of(error))
    );
  }

  delete(path, externalUrlDomail: string = ''): Observable<any> {
    if (externalUrlDomail) {
      return this.http.delete(`${externalUrlDomail}${path}`);
    } else {
      return this.http.delete(
        `${environment.serviceUrl}${path}`
      ).pipe(
        catchError(error => of(error))
      );
    }
  }

  json(path): Observable<any> {
    return this.http.get(path);
  }
}
