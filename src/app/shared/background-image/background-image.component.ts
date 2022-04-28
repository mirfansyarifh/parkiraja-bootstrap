import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-image',
  templateUrl: './background-image.component.html',
  styleUrls: ['./background-image.component.scss']
})
export class BackgroundImageComponent implements OnInit {

  constructor() { }

  backgroundImage = "url(./assets/plaza_mandiri.jpg) no-repeat";

  ngOnInit(): void {
    this.backgroundImage;
  }

}
