import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() alertClass = 'alert-danger';
  @Input() alertValue = 'Default Alert Value';
  @Input() alertVisible = false;
  @Input() xxxx = "";

  constructor() { }

  ngOnInit(): void {
    this.alertClass;
    this.alertValue;
    this.alertVisible;
  }

  alertButtonClicked() {
    this.alertVisible = false;
  }

}
