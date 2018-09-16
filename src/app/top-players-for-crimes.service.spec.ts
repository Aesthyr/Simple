import { TestBed, inject } from '@angular/core/testing';

import { TopPlayersForCrimesService } from './top-players-for-crimes.service';

describe('TopPlayersForCrimesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopPlayersForCrimesService]
    });
  });

  it('should be created', inject([TopPlayersForCrimesService], (service: TopPlayersForCrimesService) => {
    expect(service).toBeTruthy();
  }));
});
