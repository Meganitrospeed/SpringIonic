import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Bicycle } from '../models/bicycle';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
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

  getCurrentBicycleId(): number{
    return this.currentBicycleId;
  }

  getBicycles(): Observable<Bicycle[]> {
    return this.http.get<Bicycle[]>(apiUrl);
      // .pipe(
      //   tap(bicycle => console.log('fetched bicycles'))
      //   // ,
      //   // catchError(this.handleError('getBicycles', []))
      // );
  }

  deleteBicycle(id: number){
    return this.http.delete(apiUrl + "/" + id);
  }

  insertBicycle(bicycle: Bicycle): Observable<any>{
    console.log(bicycle)

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('model', bicycle.model);
    urlSearchParams.append('brand', bicycle.brand);
    let body = urlSearchParams.toString();

    return this.http.post(apiUrl, body, httpOptions);
  }

  updateBicycle(bicycle: Bicycle): Observable<any>{
    console.log(bicycle)

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('model', bicycle.model);
    urlSearchParams.append('brand', bicycle.brand);
    let body = urlSearchParams.toString();

    return this.http.put(apiUrl + "/" + bicycle.id, body, httpOptions);
  }

  getBicycle(id:number): Observable<Bicycle> {
    return this.http.get<Bicycle>(apiUrl + "/" + id);
  }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(error); // log to console instead
  //     return of(result as T);
  //   };
  // }
}
