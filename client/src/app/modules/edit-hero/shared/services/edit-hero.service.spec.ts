import { TestBed, inject } from '@angular/core/testing';

import { EditHeroService } from './edit-hero.service';

describe('EditHeroService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [EditHeroService]
		});
	});

	it('should be created', inject([EditHeroService], (service: EditHeroService) => {
		expect(service).toBeTruthy();
	}));
});
