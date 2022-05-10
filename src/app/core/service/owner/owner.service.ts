import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OwnerData, OwnerPageable } from '../../model/owner';



@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl

  /** GET from the server */
   public getAllOwners(): Observable<OwnerPageable>{
    return this.http.get<OwnerPageable>(`${this.apiUrl}/parking_owner`);
  }

  /** POST to the server */
  public create(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/parking_owner`, data);
  }
  
  /** DELETE From the server */
  public delete(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/parking_owner?id=${id}`);
  }

  /** GET From the server */
  public getOwner(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/parking_owner?id=${id}`);
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

}
