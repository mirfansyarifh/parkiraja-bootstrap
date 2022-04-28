import { TestBed } from '@angular/core/testing';

import { ParkingApiService } from './parking-api.service';

describe('ParkingApiService', () => {
  let service: ParkingApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkingApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
