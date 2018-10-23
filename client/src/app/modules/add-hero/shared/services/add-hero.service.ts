import { Injectable } from '@angular/core';

import { AddHero } from './add-hero.model';
import { LoggerService } from '../../../../core/services/logger.service';
import { HeroApi } from '../../../../shared/sdk/services/custom/Hero';

import { Observable, of , throwError as observableThrowError } from 'rxjs';

import { AppConfig } from '../../../../configs/app.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

// const httpOptions = {
// 	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({
	providedIn: 'root'
})
export class AddHeroService {

	constructor(

		private hero: HeroApi

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

	createHero(hero: AddHero) {

		return this.hero.create( JSON.stringify(hero) )
		    .pipe(
		        tap((res) => {

		        	LoggerService.log(`adding hero...`)

		        	console.log(res);

		        	// this.showSnackBar('heroCreated');
		        }),
		        catchError(AddHeroService.handleError('create heroes', []))
		    );
	}
}
