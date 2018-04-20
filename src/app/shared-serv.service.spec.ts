import { TestBed, inject } from '@angular/core/testing';

import { SharedServService } from './shared-serv.service';

describe('SharedServService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedServService]
    });
  });

  it('should be created', inject([SharedServService], (service: SharedServService) => {
    expect(service).toBeTruthy();
  }));
});
