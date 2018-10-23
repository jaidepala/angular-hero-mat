import { TestBed, inject } from '@angular/core/testing';

import { AddHeroService } from './add-hero.service';

describe('AddHeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddHeroService]
    });
  });

  it('should be created', inject([AddHeroService], (service: AddHeroService) => {
    expect(service).toBeTruthy();
  }));
});
