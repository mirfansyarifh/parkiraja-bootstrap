import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ErrorHandlerService } from '../error-handler.service';
import { tap } from 'rxjs/operators';
import { PagingParkingLot, ParkingLotContent } from '../../model/parkingLot';
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

   /** POST: add a new hero to the database */
  postParkingLot(parkingLot :  object): any{
  return this.http.post<ParkingLotContent>(this.targetApiUrl, parkingLot, this.httpOptions)

  }

  /** DELETE: delete the hero from the server */
  deleteParkingLot(id : any): any{ 
    return this.http.delete<ParkingLotContent>(`${this.targetApiUrl}?id=` +id)
  }


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };



 


}
