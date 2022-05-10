import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-plate-number',
  templateUrl: './plate-number.component.html',
  styleUrls: ['./plate-number.component.scss']
})
export class PlateNumberComponent implements OnInit {

  constructor() { }
  @Output() plateNumberOutput = new EventEmitter<{ output: string, valid: boolean }>();

  ngOnInit(): void {
  }

  plate = new FormGroup({
    plateCityCode: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]),
    plateNumber: new FormControl('', Validators.required),
    plateIdentifier: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')])
  })

  toParent() {
    let output = "" + this.plate.get('plateCityCode')!.value
      + " " + this.plate.get('plateNumber')!.value
      + " " + this.plate.get('plateIdentifier')!.value;

    let valid = this.plate.valid;

    this.plateNumberOutput.emit({ output, valid });
  }



}
