import { TestBed } from '@angular/core/testing';

import { UtilsProviderService } from './utils-provider.service';

describe('UtilsProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtilsProviderService = TestBed.get(UtilsProviderService);
    expect(service).toBeTruthy();
  });
});
