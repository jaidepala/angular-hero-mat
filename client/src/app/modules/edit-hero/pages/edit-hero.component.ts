import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatSnackBar, MatSnackBarConfig } from '@angular/material';

import { LoggerService } from '../../../core/services/logger.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { _ } from '@biesbjerg/ngx-translate-extract/dist/utils/utils';

import { TranslateService } from '@ngx-translate/core';
import { UtilsHelperService } from '../../../core/services/utils-helper.service';

import { AppConfig } from '../../../configs/app.config';
import { EditHeroService } from '../shared/services/edit-hero.service';

@Component({
	selector: 'app-edit-hero',
	templateUrl: './edit-hero.component.html',
	styleUrls: ['./edit-hero.component.css'],
    animations: [UtilsHelperService.fadeInOut()]
})
export class EditHeroComponent implements OnInit {

	public editHero = {

		id: '',

		hero: {

			name: '',
			alterEgo: '',
			dateOfEstablishment: '',
			gender: '',
			production: ''
		}

	};

	constructor(

		private snackBar: MatSnackBar,
		private dialog: MatDialog,
		private router: Router,
		private translateService: TranslateService,
		private activeRoute: ActivatedRoute,
		private hero: EditHeroService 

	) {

	};

	ngOnInit() {

        const routeParams = this.activeRoute.snapshot.params;

        this.editHero.id = routeParams.hero.split('-')[routeParams.hero.split('-').length - 1];

        this.hero.getHeroDetails( this.editHero.id )
		.subscribe((hero) => {

			this.editHero.hero['name'] = hero['name'];
			this.editHero.hero['alterEgo'] = hero['alterEgo'];
			this.editHero.hero['dateOfEstablishment'] = hero['dateOfEstablishment'];
			this.editHero.hero['gender'] = hero['gender'];
			this.editHero.hero['production'] = hero['production'];

		}, (error: Response) => {

            const config: any = new MatSnackBarConfig();
            config.duration = AppConfig.snackBarDuration;

            this.translateService.get([String(_('heroDetailFail'))]).subscribe((texts) => {
                this.snackBar.open(texts['heroDetailFail'], 'OK', config);
            });

            this.router.navigate(['/list-hero']);

			console.log('error ', error);
		});
	};

	confirmEdit() {

		this.hero.editHeroDetails( this.editHero.id, this.editHero.hero )
		.subscribe((hero) => {

            const config: any = new MatSnackBarConfig();
            config.duration = AppConfig.snackBarDuration;

            this.translateService.get([String(_('heroDetailSuccess'))]).subscribe((texts) => {
                this.snackBar.open(texts['heroDetailSuccess'], 'OK', config);
            });

            this.router.navigate(['/list-hero']);

		}, (error: Response) => {

			console.log('error ', error);
		});
	};

}
