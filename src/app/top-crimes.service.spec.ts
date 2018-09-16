import { TestBed, inject } from '@angular/core/testing';

import { TopCrimesService } from './top-crimes.service';

describe('TopCrimesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopCrimesService]
    });
  });

  it('should be created', inject([TopCrimesService], (service: TopCrimesService) => {
    expect(service).toBeTruthy();
  }));
});
