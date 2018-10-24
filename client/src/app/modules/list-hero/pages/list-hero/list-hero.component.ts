import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

// import { Router } from '@angular/Router';
import { LoggerService } from '../../../../core/services/logger.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';

import { _ } from '@biesbjerg/ngx-translate-extract/dist/utils/utils';

import { TranslateService } from '@ngx-translate/core';
import { UtilsHelperService } from '../../../../core/services/utils-helper.service';

// import { AddHero } from '../shared/services/add-hero.model';
import { GetHeroService } from '../../shared/services/get-hero.service';

@Component({
	selector: 'app-list-hero',
	templateUrl: './list-hero.component.html',
	styleUrls: ['./list-hero.component.css']
})
export class ListHeroComponent implements OnInit {

	public heroObj = {

		production: '',

		loader: 0,

		list: []
	};

	constructor(

		private getHero: GetHeroService

	) {

	};

	ngOnInit() {

		this.getAllHeroes( {} );
	};

	getAllHeroes( filterObj ) {

		this.heroObj.loader = 1;

		this.getHero.getListOfHeroes( filterObj )
		.subscribe((hero) => {

			this.heroObj.loader = 2;

			this.heroObj.list = hero;

		}, (error: Response) => {

			this.heroObj.loader = 3;

			LoggerService.error('maximum votes limit reached', error);
		});
	};

	changeProduction( thisProduction ) {

		console.log('thisProduction', thisProduction);

		this.getAllHeroes({
			where: {

				production: thisProduction
			}
		});
	};

}
