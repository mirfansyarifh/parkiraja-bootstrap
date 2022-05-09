import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { PagingParking } from '../../model/parking';
import { ErrorHandlerService } from './../error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ParkingApiService {

  constructor(
    private http: HttpClient
  ) { }

  apiUrl = environment.apiUrl;
  private targetApiUrl = `${this.apiUrl}/parking`;  // URL to web api

  /** GET from the server */
  getTimeSpent(parkingLotId: string): Observable<PagingParking> {
    const customizedUrl = `${this.targetApiUrl}/${parkingLotId}/all/time_spent`;
    return this.http.get<PagingParking>(customizedUrl)
  }

  /** GET Count vehicle */
  countVehicle(vehicleType: string) {
    const customizedUrl = `${this.targetApiUrl}/${vehicleType}/count`;
    return this.http.get<number>(customizedUrl)
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };



}
