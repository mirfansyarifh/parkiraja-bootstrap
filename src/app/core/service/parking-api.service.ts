import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { PagingParking } from '../model/parking';
import { ErrorHandlerService } from './error-handler.service';

type HttpOptions = {
  headers?: HttpHeaders | { [header: string]: string | string[]; };
  observe?: "body"; params?: HttpParams | { [param: string]: string | string[]; };
  reportProgress?: boolean; responseType?: "json" /* or "text" as "json" */;
  withCredentials?: boolean;
}

let get_http_options_text = (): HttpOptions => {
  return {
    headers: { 'Content-Type': 'text/plain' },
    observe: "body",
    responseType: "text" as "json",  // @see https://github.com/angular/angular/issues/18586
    withCredentials: true
  }
}

@Injectable({
  providedIn: 'root'
})
export class ParkingApiService {

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) { }

  apiUrl = environment.apiUrl;
  private targetApiUrl = `${this.apiUrl}/parking`;  // URL to web api

  /** GET from the server */
  getTimeSpent(parkingLotId: string): Observable<HttpResponse<PagingParking>> {
    const customizedUrl = `${this.targetApiUrl}/${parkingLotId}/all/time_spent`;
    // return this.http.get<PagingParking>(customizedUrl).pipe(
    //   tap(_ => this.errorHandlerService.log('fetched Parking Data')),
    //   catchError(this.errorHandlerService.handleError<PagingParking>(`getParking, ${parkingLotId}`))
    // );
    return this.http.get<PagingParking>(customizedUrl,
      { observe: 'response' })
  }

  getTextFile(parkingLotId: string) {
    const customizedUrl = `${this.targetApiUrl}/${parkingLotId}/all/time_spent`;
    return this.http.get(customizedUrl, { responseType: 'text' })
      .pipe(
        tap( // Log the result or error
          {
            next: (data) => this.errorHandlerService.log(data),
            error: (error) => this.errorHandlerService.log(error)
          }
        )
      );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };



}
