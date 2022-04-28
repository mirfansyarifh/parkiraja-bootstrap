import { Component, OnInit } from '@angular/core';
import { HeaderConfigService } from 'src/app/core/service/header-config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private headerConfigService: HeaderConfigService) { }
  homeAdminActive = '';
  ownerActive = '';
  lotActive = '';
  ticketActive = '';

  ngOnInit(): void {
    this.menuActive();
  }

  clearActive() {
    this.homeAdminActive = '';
    this.ownerActive = '';
    this.lotActive = '';
    this.ticketActive = '';
  }
  menuActive() {
    this.headerConfigService.URL.subscribe(url => {

      var splitted = url.split("/");
      console.log(splitted);

      if (splitted[1] === "admin") {
        this.clearActive();
        this.homeAdminActive = "active";
      }
      else if (splitted[1] == "owner") {
        this.clearActive();
        this.ownerActive = "active";
      }
      else if (splitted[1] == "parking") {
        this.clearActive();
        this.lotActive = "active";
      }
    });


  }
}
