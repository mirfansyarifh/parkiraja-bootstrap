import { Component, OnInit } from '@angular/core';
import { ParkingLotApiService } from '../../core/service/parking-lot/parking-lot-api.service';
import { LogService } from 'src/app/core/service/log.service';
import { PagingParkingLot, ParkingLotContent } from 'src/app/core/model/parkingLot';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent implements OnInit {
 
  constructor(
    private parkingLotApiService : ParkingLotApiService,
   
  ) { }

  ngOnInit(): void {
     
  }
  add(ownerId :string, name: string, address:string, size:string, capacity:string, category:string ){
      let parkingLot ={
        ownerId : ownerId,
        name : name,
        address : address,
        size : size,
        capacity : capacity,
        category : category
      }
      this.parkingLotApiService.postParkingLot(parkingLot)
      .subscribe();
    }

}
