import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { EditHeroRoutingModule } from './edit-hero-routing.module';
import { EditHeroComponent } from './pages/edit-hero.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		SharedModule,
		EditHeroRoutingModule
	],
	declarations: [
		EditHeroComponent
	]
})
export class EditHeroModule {}
