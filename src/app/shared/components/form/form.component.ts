import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }
  @Input() widthValue = '100px';
  @Input() heightValue = '200px';
  @Input() formValue = 'Text';
  @Input() nameUpForm = 'Text';

  ngOnInit(): void {
    this.widthValue;
    this.heightValue;
    this.formValue;
    this.nameUpForm;
  }

}
