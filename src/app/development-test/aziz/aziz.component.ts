import { Component, OnInit } from '@angular/core';
import { ParkingLotApiService } from '../../core/service/parking-lot/parking-lot-api.service';
import { LogService } from 'src/app/core/service/log.service';
import { PagingParkingLot, ParkingLotContent } from 'src/app/core/model/parkingLot';
import { Router } from '@angular/router';




@Component({
  selector: 'app-aziz',
  templateUrl: './aziz.component.html',
  styleUrls: ['./aziz.component.scss']
})
export class AzizComponent implements OnInit {
    // alert:boolean=false

   results = "";
   

   sendAlert = false;
   parkingLotContent : ParkingLotContent [] = [];
  constructor(
    private parkingLotApiService : ParkingLotApiService,
    private logger: LogService,
    private router:Router
    
  ) { }

  ngOnInit(): void {
    // let alertComp = new AlertComponent();
    // alertComp.buttonClick();
    
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

      // buttonClickInput(){
      //   let alertComp = new AlertComponent();
      //   console.log(alertComp.alertCondition);

      //   alertComp.alertCondition = true;
      //   console.log(alertComp);
      //   return alertComp;
      // }

  }


