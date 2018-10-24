import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListHeroComponent } from './pages/list-hero/list-hero.component';

const routes: Routes = [
	{ path: '', component: ListHeroComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ListHeroRoutingModule {}
