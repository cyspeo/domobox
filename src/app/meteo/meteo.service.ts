import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Meteo } from './meteo.model';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const DATA_METEO: Meteo = {
  icon_big: "http://www.prevision-meteo.ch/style/images/icon/faibles-passages-nuageux-big.png"
};

@Injectable()
export class MeteoService {

  constructor(private http: Http) { }

  // private instance variable to hold base url
  private meteoUrl = 'http://www.prevision-meteo.ch/services/json/';

  getMeteo(ville: string): Observable<any> {
    //console.log("datapiscine="+ DATA_METEO);
    //      return Promise.resolve(DATA_METEO);

    // ...using get request
    return this.http.get(this.meteoUrl+ville)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}