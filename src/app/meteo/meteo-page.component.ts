import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { MeteoService } from './meteo.service';
import { Meteo } from './meteo.model';


@Component({
  selector: 'app-meteo-page',
  templateUrl: './meteo-page.component.html',
  styleUrls: ['./meteo-page.component.css']
})
export class MeteoPageComponent implements OnInit {
  meteoOperation:Observable<any>;
  meteoData: Meteo;
  constructor(private meteoService: MeteoService) {
    this.meteoData = new Meteo();
    //this.meteoData.icon_big = "http://www.prevision-meteo.ch/style/images/icon/ensoleille-big.png";
   }
  
  

  ngOnInit() {
    this.meteoOperation = this.meteoService.getMeteo("toulouse");
    this.meteoOperation.subscribe(meteo => {
      this.meteoData.icon_big = meteo.current_condition.icon_big;
      this.meteoData.tmp = meteo.current_condition.tmp;
      this.meteoData.tmin = meteo.fcst_day_0.tmin;
      this.meteoData.tmax = meteo.fcst_day_0.tmax;
      this.meteoData.condition = meteo.current_condition.condition;
      //console.log("meteo ok: " + this.meteoData.icon_big);
    }, err => {
      console.log("[meteo-page-component ]"+err);
    } );
  }

  

}
