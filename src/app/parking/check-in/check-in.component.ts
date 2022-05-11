import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderConfigService } from 'src/app/core/service/header-config.service';
import { LogService } from 'src/app/core/service/log.service';
import { ParkingApiService } from 'src/app/core/service/parking/parking-api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ParkingContent } from 'src/app/core/model/parking';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent implements OnInit {

  childIsValid = false;
  plateNumber = "";
  alertClass = "alert-danger";
  alertValue = "";
  alertVisible = false;

  constructor(
    private router: Router,
    private headerConfigService: HeaderConfigService,
    private logger: LogService,
    private parkingApiService: ParkingApiService) { }

  ngOnInit(): void {
    this.headerConfigService.setURL(this.router.url);
  }

  checkInForm = new FormGroup({
    parkingLotId: new FormControl('', Validators.required),
    vehicleType: new FormControl('', Validators.required)
  })

  receivePlateNumber($event: object) {
    let { output, valid }: any = $event;
    this.childIsValid = true;

    if (valid) {
      this.plateNumber = output;
    }
  }

  onSubmit() {
    if (this.checkInForm.valid && this.childIsValid) {

      let parkingContent = {
        parkingLotId: this.checkInForm.get('parkingLotId')?.value,
        licensePlate: this.plateNumber,
        type: this.checkInForm.get('vehicleType')?.value
      };
      this.checkIn(parkingContent);
    }
    else {
      this.alert("alert-danger", "Please fill all inputs", true);
    }

  }

  checkIn(parkingContent: object) {
    this.parkingApiService.checkIn(parkingContent)
      .subscribe({
        next: (res) => {
          this.alert("alert-success", "Saved", true);
        },
        error: (e: HttpErrorResponse) => {
          this.alert("alert-danger", e.error.message, true);
        }
      });
  }

  alert(alertClass: string, alertValue: string, alertVisible: boolean) {
    this.alertClass = alertClass;
    this.alertValue = alertValue;
    this.alertVisible = alertVisible;
  }
}
