import { TestBed, inject } from '@angular/core/testing';

import { TopTeamsForCrimesService } from './top-teams-for-crimes.service';

describe('TopTeamsForCrimesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopTeamsForCrimesService]
    });
  });

  it('should be created', inject([TopTeamsForCrimesService], (service: TopTeamsForCrimesService) => {
    expect(service).toBeTruthy();
  }));
});
