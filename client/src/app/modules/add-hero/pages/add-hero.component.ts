import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

// import { Router } from '@angular/Router';
import { LoggerService } from '../../../core/services/logger.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';

import { _ } from '@biesbjerg/ngx-translate-extract/dist/utils/utils';

import { TranslateService } from '@ngx-translate/core';
import { UtilsHelperService } from '../../../core/services/utils-helper.service';

import { AddHero } from '../shared/services/add-hero.model';
import { AddHeroService } from '../shared/services/add-hero.service';

@Component({
	selector: 'app-add-hero',
	templateUrl: './add-hero.component.html',
	styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

	// #picker
	// @ViewChild('picker') datePicker: ElementRef;

	public heroObj: AddHero = {

		// name: 'Spiderman',
		// alterEgo: 'Peter Parker',
		// dateOfEstablishment: '10/22/1993',
		// gender: 'Male',
		// production: 'Marvel'

		name: '',
		alterEgo: '',
		dateOfEstablishment: '',
		gender: '',
		production: ''
	};

	constructor(

		private hero: AddHeroService,
		private dialog: MatDialog,
		private snackBar: MatSnackBar,
		private translateService: TranslateService,
		// private router: Router,
		private formBuilder: FormBuilder

	) {

	};

	ngOnInit() {};

	createHero() {

		this.hero.createHero(this.heroObj).subscribe((hero) => {

			console.log('hero', hero);

		}, (error: Response) => {

			LoggerService.error('maximum votes limit reached', error);
		});
	};

}
