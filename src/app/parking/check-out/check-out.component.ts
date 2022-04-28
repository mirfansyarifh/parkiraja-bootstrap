import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderConfigService } from 'src/app/core/service/header-config.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  constructor(private router: Router, private headerConfigService: HeaderConfigService) { }

  ngOnInit(): void {
    this.headerConfigService.setURL(this.router.url);
  }

}
