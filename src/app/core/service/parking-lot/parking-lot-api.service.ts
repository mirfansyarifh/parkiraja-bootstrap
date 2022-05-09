import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ErrorHandlerService } from '../error-handler.service';
import { tap } from 'rxjs/operators';
import { PagingParkingLot } from '../../model/parkingLot';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ParkingLotApiService {

  constructor(
    private http: HttpClient
  ) { }

  apiUrl = environment.apiUrl;
  private targetApiUrl = `${this.apiUrl}/parking_lot`;  // URL to web api

  /** GET from the server */
  getAllParkingLot() : Observable <PagingParkingLot> {
    // const customizedUrl = `${this.targetApiUrl}/${parkingLotId}/all/time_spent`;
    return this.http.get<PagingParkingLot>(this.targetApiUrl)
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };



}
