import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  currentURL = this.router.url;

  homeAdminActive = '';
  parkingLotActive = '';
  pricingActive = '';

  ngOnInit(): void {
    this.currentURL;
    this.menuActive();
  }

  menuActive() {
    if (this.currentURL === "admin") {
      this.homeAdminActive = "active";
    }
    else if (this.currentURL === "parking") {
      this.parkingLotActive = "active";
    }
  }
}
