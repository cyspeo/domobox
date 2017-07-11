import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {CanDeactivateGuard } from './app-routing/can-deactivate-guard.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//Piscine
import { PiscineService } from './piscine/piscine.service';
import { PiscineComponent } from './piscine/piscine.component';
import { PiscineWidgetComponent } from './piscine/piscine-widget.component';
//Meteo
import { MeteoService } from './meteo/meteo.service';
import { MeteoPageComponent } from './meteo/meteo-page.component';
import { MeteoWidgetComponent } from './meteo/meteo-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PiscineComponent,
    PiscineWidgetComponent,
    MeteoPageComponent,
    MeteoWidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [PiscineService, MeteoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
