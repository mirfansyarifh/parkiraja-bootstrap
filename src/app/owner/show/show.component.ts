import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderConfigService } from 'src/app/core/service/header-config.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  constructor(private router: Router, private headerConfigService: HeaderConfigService) { }

  ngOnInit(): void {
    this.headerConfigService.setURL(this.router.url);
  }

}
