import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { AddHeroRoutingModule } from './add-hero-routing.module';
import { AddHeroComponent, SpinnerOverviewDialog } from './pages/add-hero.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		SharedModule,
		AddHeroRoutingModule
	],
	declarations: [
		AddHeroComponent,
		SpinnerOverviewDialog
	],
    exports: [
        AddHeroComponent,
        SpinnerOverviewDialog
    ],
    entryComponents: [
        AddHeroComponent,
        SpinnerOverviewDialog
    ]

})
export class AddHeroModule {}
