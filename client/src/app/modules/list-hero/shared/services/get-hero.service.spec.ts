import { TestBed, inject } from '@angular/core/testing';

import { GetHeroService } from './get-hero.service';

describe('GetHeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetHeroService]
    });
  });

  it('should be created', inject([GetHeroService], (service: GetHeroService) => {
    expect(service).toBeTruthy();
  }));
});
