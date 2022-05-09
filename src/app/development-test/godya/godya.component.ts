import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderConfigService } from 'src/app/core/service/header-config.service';
import { ParkingApiService } from 'src/app/core/service/parking/parking-api.service';
import { LogService } from 'src/app/core/service/log.service';
import { PagingContent, PagingParking, ParkingContent } from 'src/app/core/model/parking';

@Component({
  selector: 'app-godya',
  templateUrl: './godya.component.html',
  styleUrls: ['./godya.component.scss']
})
export class GodyaComponent implements OnInit {

  results = "";
  pagingContent: PagingContent[] = [];
  pageNumber = 0;
  totalPage = 0;

  constructor(private router: Router,
    private headerConfigService: HeaderConfigService,
    private parkingApiService: ParkingApiService,
    private logger: LogService) { }

  ngOnInit(): void {
    this.headerConfigService.setURL(this.router.url);
    this.getTimeSpent();

  }

  getTimeSpent() {
    this.parkingApiService.getTimeSpent('40288182800cc09701800cc615cf0001')
      .subscribe(results => {
        this.pagingContent = results.content;
        this.pageNumber = results.pageNumber + 1;
        this.totalPage = results.totalPages;

        this.logger.log(results);
      }
      );
  }

}
