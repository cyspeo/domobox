import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-param',
  templateUrl: './param.component.html',
  styleUrls: ['./param.component.css']
})
export class ParamComponent implements OnInit {
  @LocalStorage
  public urlServer: string;

  @LocalStorage
  public userName: string;

  @LocalStorage
  public password: string;
  constructor() { }

  ngOnInit() {
    //this.urlServer = "http://145.239.73.63:3001/api/piscine/programmation";
    this.userName = "domobox";
    this.password = "domoboxpw";
  }


}

/**
 * LocalStorage for storing string values 
 */
export function LocalStorage(
  target: Object, // The prototype of the class
  decoratedPropertyName: string // The name of the property
) {

  // get and set methods
  Object.defineProperty(target, decoratedPropertyName, {
    get: function () {
      return localStorage.getItem(decoratedPropertyName) || '';
    },
    set: function (newValue) {
      localStorage.setItem(decoratedPropertyName, newValue);
    }
  });
}
