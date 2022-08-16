import { TestBed } from '@angular/core/testing';

import { AllsesrvicesService } from './allsesrvices.service';

describe('AllsesrvicesService', () => {
  let service: AllsesrvicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllsesrvicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
