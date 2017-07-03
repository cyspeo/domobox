import { Component, OnInit } from '@angular/core';
import { MeteoPageComponent } from './meteo-page.component';

@Component({
  selector: 'app-meteo-widget',
  template: 
      "<div class=\"widget \">"+
      "<div class=\"caption\">"+
      "  <h4>Météo</h4>"+
      "</div>"+
      "  <div class=\"content\">"+
      " <img src=\"{{meteoData.icon_big}}\"  style=\"float: left; margin-right: 10px;\" width=\"70\" height=\"70\">"+
      "</div>"+
    "</div>"
,
  //styleUrls: ['./meteo-widget.component.css']
})
export class MeteoWidgetComponent extends MeteoPageComponent implements OnInit {

}