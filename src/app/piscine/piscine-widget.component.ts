import { Component, OnInit } from '@angular/core';
import { PiscineComponent } from './piscine.component';

@Component({
  selector: 'widget-piscine',
  templateUrl: 'piscine-widget.component.html',
  styleUrls: ['./piscine-widget.component.css']
})
export class PiscineWidgetComponent extends PiscineComponent implements OnInit {

}
