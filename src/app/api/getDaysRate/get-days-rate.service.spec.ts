import { TestBed } from '@angular/core/testing';

import { GetDaysRateService } from './get-days-rate.service';

describe('GetDaysRateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetDaysRateService = TestBed.get(GetDaysRateService);
    expect(service).toBeTruthy();
  });
});
