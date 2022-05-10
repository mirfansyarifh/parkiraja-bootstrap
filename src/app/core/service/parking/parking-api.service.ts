import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Bill, PagingParking, ParkingContent } from '../../model/parking';
import { ErrorHandlerService } from './../error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ParkingApiService {

  constructor(
    private http: HttpClient,
    private error: ErrorHandlerService
  ) { }

  apiUrl = environment.apiUrl;
  private targetApiUrl = `${this.apiUrl}/parking`;  // URL to web api

  /** GET from the server */
  getTimeSpent(parkingLotId: string): Observable<PagingParking> {
    const customizedUrl = `${this.targetApiUrl}/${parkingLotId}/all/time_spent`;
    return this.http.get<PagingParking>(customizedUrl)
  }

  /** GET by plateNumber */
  getByPlateNumber(plateNumber: string): Observable<ParkingContent> {
    const customizedUrl = `${this.targetApiUrl}/plate?licensePlate=` + plateNumber;
    return this.http.get<ParkingContent>(customizedUrl)
  }

  /** GET Bill by ID */
  getBill(parkingId: string): Observable<Bill> {
    const customizedUrl = `${this.targetApiUrl}/${parkingId}/bill`;
    return this.http.get<Bill>(customizedUrl)
  }

  /** GET Count vehicle */
  countVehicle(vehicleType: string) {
    const customizedUrl = `${this.targetApiUrl}/${vehicleType}/count`;
    return this.http.get<number>(customizedUrl)
  }

  /** POST: add vehicle to parking */
  checkIn(parking: any): Observable<any> {
    return this.http.post<any>(this.targetApiUrl, parking, this.httpOptions);
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };



}
