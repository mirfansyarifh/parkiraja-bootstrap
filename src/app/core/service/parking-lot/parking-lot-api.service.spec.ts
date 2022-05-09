import { TestBed } from '@angular/core/testing';

import { ParkingLotApiService } from './parking-lot-api.service';

describe('ParkingLotApiService', () => {
  let service: ParkingLotApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkingLotApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});