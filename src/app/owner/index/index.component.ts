import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerData } from 'src/app/core/model/owner';
import { OwnerService } from 'src/app/core/service/owner/owner.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  idOwner = '';
  results = "";
  public ownerData: OwnerData[] = [];

  constructor(
    private ownerService: OwnerService,
    private router: Router
  )
    {
    }

  ngOnInit(): void {
    this.getAllOwners();
  }

  public getAllOwners(): void{
    this.ownerService.getAllOwners()
      .subscribe(results=>{
        this.ownerData = results.content;
      }
    );
  }

  public deleteOwner(idOwner): void {  
    this.ownerService.delete(idOwner)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/owner']);
          this.idOwner = '';
        },
        error: (e) => console.error(e)
      });
  }

  getOwner(idOwner): void{
    this.ownerService.getOwner(idOwner)
      .subscribe(results => {
        this.ownerData = results.content;
        this.router.navigate(['/owner/edit?id='+idOwner]);
      }
    );
  }

}
