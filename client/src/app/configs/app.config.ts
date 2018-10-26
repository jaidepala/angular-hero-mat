import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: any = {
    routes: {
        heroes: 'heroes',
        error404: '404',
        addHero: 'add-hero',
        editHero: 'edit-hero',
        listHero: 'list-hero'
    },
    endpoints: {
        heroes: 'https://nodejs-example-app.herokuapp.com/heroes'
        // heroes: 'http://localhost:3000/api/heroes'
    },
    votesLimit: 3,
    topHeroesLimit: 4,
    snackBarDuration: 3000,
    repositoryURL: 'https://github.com/ismaestro/angular6-example-app'
};
