import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteRoutingModule } from './modules/site/site-routing.module';


const routes: Routes = [];

@NgModule({
  imports: [
    SiteRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
