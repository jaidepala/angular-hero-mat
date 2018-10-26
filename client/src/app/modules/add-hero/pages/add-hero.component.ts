import { Component, OnInit, Inject, ElementRef } from '@angular/core';

// import { Router } from '@angular/Router';
import { LoggerService } from '../../../core/services/logger.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { _ } from '@biesbjerg/ngx-translate-extract/dist/utils/utils';

import { TranslateService } from '@ngx-translate/core';
import { UtilsHelperService } from '../../../core/services/utils-helper.service';

import { AppConfig } from '../../../configs/app.config';
import { AddHero } from '../shared/services/add-hero.model';
import { AddHeroService } from '../shared/services/add-hero.service';

@Component({
	selector: 'app-add-hero',
	templateUrl: './add-hero.component.html',
	styleUrls: ['./add-hero.component.css'],
    animations: [UtilsHelperService.fadeInOut()]
})
export class AddHeroComponent implements OnInit {

	// #picker
	// @ViewChild('picker') datePicker: ElementRef;

	public loadingDialog = null;

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

	openDialog(): void {

		this.loadingDialog = this.dialog.open(SpinnerOverviewDialog, {
			disableClose: true
		});
	}

	clearHero() {

		this.heroObj.name = '';
		this.heroObj.alterEgo = '';
		this.heroObj.dateOfEstablishment = '';
		this.heroObj.gender = '';
		this.heroObj.production = '';
	};

	createHero() {

		this.openDialog();

		this.hero.createHero(this.heroObj).subscribe((hero) => {

		    this.loadingDialog.close();

		    if( !hero || hero == null ) {

	            this.translateService.get([String(_('heroCreateFail'))]).subscribe((texts) => {
	                this.snackBar.open(texts['heroCreateFail']);
	            });

		    	return false;
		    };

		    this.clearHero();

            const config: any = new MatSnackBarConfig();
            config.duration = AppConfig.snackBarDuration;

            this.translateService.get([String(_('heroCreated'))]).subscribe((texts) => {
                this.snackBar.open(texts['heroCreated'], 'OK', config);
            });

		}, (error: Response) => {

			LoggerService.error('Could not add hero!', error);

		    this.loadingDialog.close();

            const config: any = new MatSnackBarConfig();
            config.duration = AppConfig.snackBarDuration;

            this.translateService.get([String(_('heroCreateFail'))]).subscribe((texts) => {
                this.snackBar.open(texts['heroCreateFail'], 'Try Again!', config);
            });
		});
	};

}

@Component({
  selector: 'spinner-overview-dialog',
  template: '<div class="overload-spinner"><mat-spinner></mat-spinner></div>',
})
export class SpinnerOverviewDialog {

  	constructor(
    	public dialogRef: MatDialogRef<SpinnerOverviewDialog>
	) {

  	}

	onNoClick(): void {
		this.dialogRef.close();
	};
}
