import { Component, OnInit } from '@angular/core';
import { ParkingLotApiService } from '../../core/service/parking-lot/parking-lot-api.service';
import { LogService } from 'src/app/core/service/log.service';
import { PagingParkingLot, ParkingLotContent } from 'src/app/core/model/parkingLot';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  results = "";
  parkingLotContent : ParkingLotContent [] = [];
  constructor(
    private parkingLotApiService : ParkingLotApiService,
    private logger: LogService,
    private router:Router
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

  public deleteParkingLot(id : string) : void{
    this.parkingLotApiService.deleteParkingLot(id)
      .subscribe({
       next: (res : any) => {
         console.log(res);
          this.router.navigate(['/']);
        },
        error: (e : any) => console.error(e)
      });
    }

}
