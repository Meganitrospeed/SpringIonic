import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Bicycle } from '../models/bicycle';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};
const apiUrl = 'http://localhost:8080/api/bicycles';

@Injectable({
  providedIn: 'root'
})
export class BicycleService {

  currentBicycleId: number;

  constructor(private http: HttpClient) { }

  setCurrentBicycleId(id: number){
    this.currentBicycleId = id;
  }

  getCurrentBicycleId(): number {
    return this.currentBicycleId;
  }

  getBicycleById(id: number): Observable<Bicycle> {
    return this.http.get<Bicycle>(apiUrl + "/" + id);
  }

  getBicycles(): Observable<Bicycle[]> {
    return this.http.get<Bicycle[]>(apiUrl);
      // .pipe(
      //   tap(bicycle => console.log('fetched bicycles'))
      //   // ,
      //   // catchError(this.handleError('getBicycles', []))
      // );
  };

  deleteBicycle(id: number): Observable<any>{
    return this.http.delete(apiUrl + "/" + id);
  }

  addBicycle(bicycle: Bicycle): Observable<any>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("model", bicycle.model);
    bodyEncoded.append("brand", bicycle.brand);
    let body = bodyEncoded.toString();

    return this.http.post(apiUrl, body, httpOptions);
  }

  updateBicycle()

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(error); // log to console instead
  //     return of(result as T);
  //   };
  // }
}
