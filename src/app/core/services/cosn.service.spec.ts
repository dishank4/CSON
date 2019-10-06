import { TestBed } from '@angular/core/testing';

import { CosnService } from './cosn.service';

describe('CosnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CosnService = TestBed.get(CosnService);
    expect(service).toBeTruthy();
  });
});
