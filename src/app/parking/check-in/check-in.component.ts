import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderConfigService } from 'src/app/core/service/header-config.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent implements OnInit {

  constructor(private router: Router, private headerConfigService: HeaderConfigService) { }

  ngOnInit(): void {
    this.headerConfigService.setURL(this.router.url);
  }

}
