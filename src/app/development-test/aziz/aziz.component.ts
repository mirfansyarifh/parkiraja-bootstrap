import { Component, OnInit } from '@angular/core';
import { ParkingLotApiService } from '../../core/service/parking-lot/parking-lot-api.service';
import { LogService } from 'src/app/core/service/log.service';
import { PagingParkingLot, ParkingLotContent } from 'src/app/core/model/parkingLot';

@Component({
  selector: 'app-aziz',
  templateUrl: './aziz.component.html',
  styleUrls: ['./aziz.component.scss']
})
export class AzizComponent implements OnInit {


   results = "";
   parkingLotContent : ParkingLotContent [] = [];
  constructor(
    private parkingLotApiService : ParkingLotApiService,
    private logger: LogService
  ) { }

  ngOnInit(): void {
    this.getAllParkingLot() 
  }

  getAllParkingLot(){
   this.parkingLotApiService.getAllParkingLot()
      .subscribe(results =>{
      this.parkingLotContent = results.content;
      this.logger.log(this.parkingLotContent);
      
      } 
      );
      
    }

  tesAzizParse (){

  }
      
  }


