import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {


  
  constructor() { }
  @Input() heightCard = '650px';
  @Input() widthCard= '500px';
  @Input() cardValue='Please Insert for card value';
  ngOnInit(): void {
    this.heightCard;
    this.widthCard;
    this.cardValue;
  }

}
