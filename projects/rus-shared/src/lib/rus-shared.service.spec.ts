import { TestBed } from '@angular/core/testing';

import { RusSharedService } from './rus-shared.service';

describe('RusSharedService', () => {
  let service: RusSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RusSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
