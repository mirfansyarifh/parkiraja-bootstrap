import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { ParkingApiService } from 'src/app/core/service/parking/parking-api.service';
import { CheckInComponent } from './check-in.component';
import { ParkingContent } from 'src/app/core/model/parking';

describe('CheckInComponent', () => {
  let component: CheckInComponent;
  let fixture: ComponentFixture<CheckInComponent>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let parkingApiService: ParkingApiService;

  beforeEach(async () => {

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    parkingApiService = new ParkingApiService(httpClientSpy);

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

  //receivePlateNumber()=======================================================
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

  //checkInForm=======================================================
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

  //onSubmit()=======================================================
  it('onSubmit should triger alert when checkInForm is invalid', () => {
    const spy = spyOn(component, 'alert');
    component.onSubmit();

    expect(spy).toHaveBeenCalled();
  });

  it('onSubmit should triger alert when childIsValid is invalid', () => {
    const spy = spyOn(component, 'alert');
    component.childIsValid = false;
    component.onSubmit();

    expect(spy).toHaveBeenCalled();
  });

  it('onSubmit should triger checkIn when checkInForm and childIsValid is valid', () => {
    const spy = spyOn(component, 'checkIn');

    component.childIsValid = true;
    component.checkInForm.setValue({
      parkingLotId: "parkingLotId",
      vehicleType: "type"
    })

    component.onSubmit();

    expect(spy).toHaveBeenCalled();
  })

  //alert=======================================================
  it('alert should reasign alertClass, alertValue, and alertVisible', () => {
    component.alert("alertClass", "alertValue", true);
    expect(component.alertClass).toEqual('alertClass');
    expect(component.alertValue).toEqual('alertValue');
    expect(component.alertVisible).toEqual(true);
  })

  //checkIn() =======================================================
  it('checkIn should triger alert success when post service success', (done: DoneFn) => {
    // const parkingContent = {
    //   parkingLotId: 'parkingLotId',
    //   licensePlate: 'licensePlate',
    //   type: 'type'
    // };
    component.childIsValid = true;
    component.checkInForm.setValue({
      parkingLotId: "parkingLotId",
      vehicleType: "type"
    })


  })
});
