import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatInputModule } from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule, MatButton } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';
// import { MatCardModule } from '@angular/material';
// import { MatIconModule } from '@angular/material';
// import { MatProgressBarModule } from '@angular/material';
// import { MatProgressSpinnerModule } from '@angular/material';
// import { MatTooltipModule } from '@angular/material';
// import { MatAutocompleteModule } from '@angular/material';
// import { MatMenuModule } from '@angular/material';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { WebpackTranslateLoader } from './webpack-translate-loader';
import { APP_CONFIG, AppConfig } from './configs/app.config';
import { SharedModule } from './shared/shared.module';
import { NgxExampleLibraryModule } from '@ismaestro/ngx-example-library';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { HeroLoadingComponent } from './shared/components/hero-loading/hero-loading.component';
import { HeroCardComponent } from './shared/components/hero-card/hero-card.component';

import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

import { SDKBrowserModule } from './shared/sdk/index';

@NgModule({
    declarations: [
        AppComponent,
        // HomePageComponent,
        // Error404PageComponent,
        // FooterComponent,
        // HeroLoadingComponent,
        // SearchBarComponent,
        // SpinnerComponent,
        // HeroCardComponent,
        // HeaderComponent
    ],
    imports: [
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useClass: WebpackTranslateLoader
            }
        }),
        NgxExampleLibraryModule.forRoot({
            config: {
                say: 'hello'
            }
        }),
        BrowserModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatButtonModule,
        SharedModule,
        // MatCardModule,
        // MatIconModule,
        // MatProgressBarModule,
        // MatProgressSpinnerModule,
        // MatTooltipModule,
        // MatAutocompleteModule,
        // MatMenuModule,
        // MatSnackBarModule,
        // ReactiveFormsModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        AppRoutingModule,
        SDKBrowserModule.forRoot()
    ],
    providers: [{
        provide: APP_CONFIG,
        useValue: AppConfig
    }],
    // schemas: [
    //     CUSTOM_ELEMENTS_SCHEMA 
    // ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
