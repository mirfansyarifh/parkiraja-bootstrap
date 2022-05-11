import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from 'src/app/core/model/parking';
import { HeaderConfigService } from 'src/app/core/service/header-config.service';
import { ParkingApiService } from 'src/app/core/service/parking/parking-api.service';
import { LogService } from 'src/app/core/service/log.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  plateNumber = "";
  bill: Bill | undefined;
  alertClass = "";
  alertValue = "";
  alertVisible = false;
  cardVisible = false;

  constructor(
    private router: Router,
    private headerConfigService: HeaderConfigService,
    private parkingApiService: ParkingApiService,
    private logger: LogService) { }

  ngOnInit(): void {
    this.headerConfigService.setURL(this.router.url);
  }

  receivePlateNumber($event: object) {
    let { output, valid }: any = $event;

    if (valid) {
      this.plateNumber = output;
    }
  }

  onClick() {
    if (this.plateNumber != "") {
      this.parkingApiService.getByPlateNumber(this.plateNumber)
        .subscribe({
          next: (results) => {
            this.alertVisible = false;
            let parkingId = results.id

            //Get the bill via ID
            this.parkingApiService.getBill(parkingId)
              .subscribe(results => {
                this.bill = results;
                this.cardVisible = true;
              })
          },
          error: (e: HttpErrorResponse) => {
            this.alertValue = e.error.message;
            this.alertClass = "alert-danger";
            this.alertVisible = true;
            this.cardVisible = false;
          }
        });
    }
    else {
      this.alertValue = "Please fill all inputs";
      this.alertClass = "alert-danger";
      this.alertVisible = true;
      this.cardVisible = false;
    }
  }

}
