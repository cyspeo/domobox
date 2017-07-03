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
      console.log("meteo ok: " + this.meteoData.icon_big);
    }, err => {
      console.log(err);
    } );
  }

  

}
