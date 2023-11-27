import { TestBed } from '@angular/core/testing';

import { RequestDetailHttpService } from './request-detail-http.service';

describe('RequestDetailHttpService', () => {
  let service: RequestDetailHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestDetailHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
