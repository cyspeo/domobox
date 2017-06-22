import { Component, OnInit } from '@angular/core';
import { PiscineComponent } from './piscine.component';

@Component({
  selector: 'widget-piscine',
  template: 
      "<div class=\"widget \">"+
      "<div class=\"caption\">"+
      "  <h4>Piscine</h4>"+
      "</div>"+
      "  <div class=\"content\">"+
      "  <i class=\"fa fa-tint fa-2x\"></i>"+
      "  <p>Eau {{piscineData.waterTmp}}°</p>"+
      "</div>"+
    "</div>"
,
  styleUrls: ['./piscine-widget.component.css']
})
export class PiscineWidgetComponent extends PiscineComponent implements OnInit {

}
