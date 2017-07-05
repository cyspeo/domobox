import { Component, OnInit } from '@angular/core';
import { MeteoPageComponent } from './meteo-page.component';

@Component({
  selector: 'app-meteo-widget',
  templateUrl: 'meteo-widget.component.html',
  styleUrls: ['./meteo-widget.component.css']
})
export class MeteoWidgetComponent extends MeteoPageComponent implements OnInit {

}