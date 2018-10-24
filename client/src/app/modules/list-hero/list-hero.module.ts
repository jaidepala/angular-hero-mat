import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { ListHeroRoutingModule } from './list-hero-routing.module';
import { ListHeroComponent } from './pages/list-hero/list-hero.component';

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		ListHeroRoutingModule
	],
	declarations: [
		ListHeroComponent
	]
})
export class ListHeroModule {}
