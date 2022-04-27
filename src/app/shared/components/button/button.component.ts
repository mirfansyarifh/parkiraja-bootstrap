import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }
  @Input() buttonWidth = '';
  @Input() buttonHeight = '50px'; 
  @Input() buttonValue = 'button';
  ngOnInit(): void {
    this.buttonWidth;
    this.buttonHeight;
    this.buttonValue;

  }


}

