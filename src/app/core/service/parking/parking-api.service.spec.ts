import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { ParkingApiService } from './parking-api.service';

describe('ParkingApiService', () => {
  let service: ParkingApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
    });
    service = TestBed.inject(ParkingApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
