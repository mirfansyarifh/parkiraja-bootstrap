import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderConfigService } from 'src/app/core/service/header-config.service';
import { ParkingContent } from 'src/app/core/model/parking';
import { LogService } from 'src/app/core/service/log.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent implements OnInit {

  inputIsValid = false;

  constructor(private router: Router,
    private headerConfigService: HeaderConfigService,
    private logger: LogService) { }

  ngOnInit(): void {
    this.headerConfigService.setURL(this.router.url);
  }

  add(parkingLotId: string, licensePlateNumber: string, vehicleType: string) {
    if (this.inputIsValid != false) {
      let parkingContent = {
        parkingLotId: parkingLotId,
        licensePlate: licensePlateNumber,
        type: vehicleType
      };

      this.logger.log(parkingContent);
    }
  }

  inputEvent(licensePlateNumber: string) {
    if (licensePlateNumber.length > 11) {
      this.logger.log("INPUT TIDAK MASUK AKAL")
    }
    else {
      this.inputIsValid == true;
    }
  }
}
