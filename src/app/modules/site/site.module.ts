import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiPrefix } from 'src/app/core/interceptors/api-prefix.interceptor';
import { EstadosComponent } from './pages/estados/estados.component';
import { BrowserModule } from '@angular/platform-browser';
import { MunicipiosComponent } from './pages/municipios/municipios.component';
import { MaterialAngularModule } from '../angular-material/angular-material.module';


@NgModule({
  declarations: [
    HomeComponent,
    EstadosComponent,
    MunicipiosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    SiteRoutingModule,
    MaterialAngularModule
  ],
  exports:[
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefix,
      multi: true
    }
  ]
})
export class SiteModule { }
