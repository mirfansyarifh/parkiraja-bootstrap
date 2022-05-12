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
            this.getBill(parkingId);
          },
          error: (e: HttpErrorResponse) => {
            this.alert("alert-danger", e.error.message, true);
            this.cardVisible = false;
          }
        });
    }
    else {
      this.alert("alert-danger", "Please fill all inputs", true);
      this.cardVisible = false;
    }
  }

  getBill(parkingId: string) {
    this.parkingApiService.getBill(parkingId)
      .subscribe(results => {
        this.bill = results;
        this.cardVisible = true;
      })
  }

  checkOut(id) {
    if (this.bill != null) {
      this.parkingApiService.checkOut(id)
        .subscribe({
          next: (res)=>{
            console.log(res);
            this.alert("alert-success", "Thankyou. See you later.", true);
            this.cardVisible = false;
          },
          error: (e: HttpErrorResponse) => {
            this.alert("alert-danger", e.error.message, true);
            this.cardVisible = false;
          }
        });
    }else {
      this.alert("alert-danger", "Please check your bill first.", true);
      this.cardVisible = false;
    }
  }

  alert(alertClass: string, alertValue: string, alertVisible: boolean) {
    this.alertClass = alertClass;
    this.alertValue = alertValue;
    this.alertVisible = alertVisible;
  }
}
