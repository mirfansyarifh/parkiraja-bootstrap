import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { CheckInComponent } from './check-in.component';
import { By } from '@angular/platform-browser';

describe('CheckInComponent', () => {
  let component: CheckInComponent;
  let fixture: ComponentFixture<CheckInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [CheckInComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('receivePlateNumber should reasign plateNumber when valid is true', () => {
    let fromChild = {
      output: "F 3212 JL",
      valid: true
    };
    component.receivePlateNumber(fromChild);
    expect(component.plateNumber).toEqual('F 3212 JL');
  })

  it('receivePlateNumber should not reasign plateNumber when valid is false', () => {
    let fromChild = {
      output: "F 3212 JL",
      valid: false
    };
    component.receivePlateNumber(fromChild);
    expect(component.plateNumber).toEqual('');
  })

  it('checkInForm should be invalid when empty', () => {
    expect(component.checkInForm.valid).toBeFalsy();
  })

  it('checkInForm should be valid', () => {
    component.checkInForm.setValue({
      parkingLotId: "parkingLotId",
      vehicleType: "type"
    })

    expect(component.checkInForm.valid).toBeTruthy();
  })

  it('onSubmit should triger alert when checkInForm is invalid', () => {
    component.onSubmit();

    let spy = spyOn(component, 'alert');
    expect(spy).toHaveBeenCalled();
  });

  it('alert should reasign alertClass, alertValue, and alertVisible', () => {
    component.alert("alertClass", "alertValue", true);
    expect(component.alertClass).toEqual('alertClass');
    expect(component.alertValue).toEqual('alertValue');
    expect(component.alertVisible).toEqual(true);
  })
});
