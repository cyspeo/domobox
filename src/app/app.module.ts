import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { PiscineService } from './piscine/piscine.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PiscineComponent } from './piscine/piscine.component';
import { PiscineWidgetComponent } from './piscine/piscine-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PiscineComponent,
    PiscineWidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PiscineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
