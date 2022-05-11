import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PagingReport } from '../../model/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  
  constructor(
    private http: HttpClient
  ) { }

  apiUrl = environment.apiUrl;
  private targetApiUrl = `${this.apiUrl}/report`;  // URL to web api

  /** GET from the server */
  getReports() : Observable <PagingReport> {
    return this.http.get<PagingReport>(this.targetApiUrl)
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
}
