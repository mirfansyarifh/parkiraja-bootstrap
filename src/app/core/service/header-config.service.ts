import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderConfigService {

  constructor() { }

  URL = new BehaviorSubject('');

  setURL(URL: string) {
    this.URL.next(URL);
  }
}
