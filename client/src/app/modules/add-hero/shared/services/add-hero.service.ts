import { Injectable } from '@angular/core';

import { AddHero } from './add-hero.model';
import { LoggerService } from '../../../../core/services/logger.service';
import { HeroApi } from '../../../../shared/sdk/services/custom/Hero';

import { Observable } from 'rxjs/Rx';
import { of , throwError as observableThrowError, empty } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { MatDialog, MatSnackBar } from '@angular/material';

import { _ } from '@biesbjerg/ngx-translate-extract/dist/utils/utils';

import { TranslateService } from '@ngx-translate/core';
import { UtilsHelperService } from '../../../../core/services/utils-helper.service';

import { AppConfig } from '../../../../configs/app.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


// const httpOptions = {
// 	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({
	providedIn: 'root'
})
export class AddHeroService {

	constructor(

		private hero: HeroApi,
		private snackBar: MatSnackBar,
		private translateService: TranslateService,

	) {};

	private static handleError < T > (operation = 'operation', result ? : T) {
	    return (error: any): Observable < T > => {

	        // TODO: send the error to remote logging infrastructure
	        console.error(error); // log to console instead

	        // TODO: better job of transforming error for user consumption
	        LoggerService.log(`${operation} failed: ${error.message}`);

	        if(error.status >= 500) {
	            throw error;
	        }

	        return of(result as T);
	    };
	}

	// createHero(hero: AddHero): Observable <AddHero> {
	createHero( hero ) {

		return this.hero.create( JSON.stringify(hero) )
		    .pipe(
		        tap((res) => {

		        	LoggerService.log(`adding hero...`);

		        	// this.showSnackBar('heroCreated');
		        }),
		        catchError((err: HttpErrorResponse) => {

		        	AddHeroService.handleError('create heroes', err);

		            if ((err.status == 400) || (err.status == 401)) {
		                // this.interceptorRedirectService.getInterceptedSource().next(err.status);
		                return Observable.empty();
		            } else {
		                return Observable.throw(err);
		            }
		        })
		    );
	}
}
