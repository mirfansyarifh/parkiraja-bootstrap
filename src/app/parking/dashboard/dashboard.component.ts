import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderConfigService } from 'src/app/core/service/header-config.service';
import { ParkingApiService } from 'src/app/core/service/parking/parking-api.service';

@Component({
  selector: 'app-dashboard-parking',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  totalParking = 0;
  totalBike = 0;
  totalCar = 0;

  constructor(
    private router: Router,
    private headerConfigService: HeaderConfigService,
    private parkingApiService: ParkingApiService) { }

  ngOnInit(): void {
    this.headerConfigService.setURL(this.router.url);
    this.countVehicle();

  }

  countVehicle() {
    this.parkingApiService.countVehicle('Bike')
      .subscribe(results => {
        this.totalBike = results;
        this.totalParking = this.totalBike + this.totalCar;
      });
    this.parkingApiService.countVehicle('Car')
      .subscribe(results => {
        this.totalCar = results;
        this.totalParking = this.totalBike + this.totalCar;
      });

  }

}
