import { LoopBackConfig } from './shared/sdk/lb.config';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { _ } from '@biesbjerg/ngx-translate-extract/dist/utils/utils';
import { AppConfig } from './configs/app.config';
import { LocalStorage } from 'ngx-store';
import { UtilsHelperService } from './core/services/utils-helper.service';
import { Angular_LoopbackApi } from './shared/sdk/index';

import { environment } from '../environments/environment';

declare const require;
declare const Modernizr;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    @LocalStorage() language = 'en';
    isOnline: boolean;

    greet: string;
    constructor(
        private al: Angular_LoopbackApi,
        private translateService: TranslateService,
        private title: Title,
        private meta: Meta,
        private snackBar: MatSnackBar,
        private router: Router
    ) {
        //Just note that this will need to be done to new components that you create if you want to give it access to our loopback app.
        // LoopBackConfig.setBaseURL("http://127.0.0.1:3000");
        LoopBackConfig.setBaseURL( environment.DOMAIN );
        LoopBackConfig.setApiVersion('api');
        this.isOnline = navigator.onLine;
    }

    ngOnInit() {

        this.translateService.setDefaultLang('en');
        this.translateService.use(this.language);

        // With this we load the default language in the main bundle (cache busting)
        this.translateService.setTranslation('en', require('../assets/i18n/en.json'));

        // this.title.setTitle('Heroes Material App');

        this.onEvents();
        this.checkBrowser();
    }

    onEvents() {
        this.router.events.subscribe((event: any) => {
            if(event instanceof NavigationEnd) {
                switch (event.urlAfterRedirects) {
                    case '/':
                        this.meta.updateTag({
                            name: 'description',
                            content: 'Angular Example app with Angular CLI, Angular Material and more'
                        });
                        break;
                    case '/' + AppConfig.routes.heroes:
                        this.title.setTitle('Heroes list');
                        this.meta.updateTag({
                            name: 'description',
                            content: 'List of super-heroes'
                        });
                        break;
                    case '/' + AppConfig.routes.addHero:
                        this.title.setTitle('Add a Hero');
                        this.meta.updateTag({
                            name: 'description',
                            content: 'Add super-hero'
                        });
                        break;
                }
            }
        });
    }

    checkBrowser() {
        if(UtilsHelperService.isBrowserValid()) {
            this.checkBrowserFeatures();
        } else {
            this.translateService.get([String(_('changeBrowser'))]).subscribe((texts) => {
                this.snackBar.open(texts['changeBrowser'], 'OK');
            });
        }
    }

    checkBrowserFeatures() {
        let supported = true;
        for(const feature in Modernizr) {
            if(Modernizr.hasOwnProperty(feature) &&
                typeof Modernizr[feature] === 'boolean' && Modernizr[feature] === false) {
                supported = false;
                break;
            }
        }

        if(!supported) {
            this.translateService.get([String(_('updateBrowser'))]).subscribe((texts) => {
                this.snackBar.open(texts['updateBrowser'], 'OK');
            });
        }

        return supported;
    }

    submit(value) {
        this.al.greet(value).subscribe(data => this.greet = data.greeting);
    }
}
