import { Component, OnInit } from '@angular/core';
import { ReportContent } from 'src/app/core/model/report';
import { LogService } from 'src/app/core/service/log.service';
import { ReportService } from 'src/app/core/service/report/report.service';

@Component({
  selector: 'app-alfin',
  templateUrl: './alfin.component.html',
  styleUrls: ['./alfin.component.scss']
})
export class AlfinComponent implements OnInit {

  results = "";
  reportContent : ReportContent [] = [];
  
  constructor(
    private reportService: ReportService,
    private logger: LogService 
  ) { }

  ngOnInit(): void {
    this.getReports()
  }
  
  getReports() {
    this.reportService.getReports()
    .subscribe(results => {
      this.reportContent = results.content;
      this.logger.log(this.reportContent);
    })
  
  }
}
