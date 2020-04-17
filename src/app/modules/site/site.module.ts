import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiPrefix } from 'src/app/core/interceptors/api-prefix.interceptor';
import { EstadosComponent } from './estados/estados.component';
import { BrowserModule } from '@angular/platform-browser';
import { MunicipiosComponent } from './municipios/municipios.component';


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
    SiteRoutingModule
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
