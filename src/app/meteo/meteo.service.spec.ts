// src/app/meteo/meteo.service.spec.ts
//import { addProviders, inject } from '@angular/core/testing';
import { MeteoService } from './meteo.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
describe('MeteoService', () => {

  beforeEach(function() {
    let x = ({ } as Http);
    this.meteoService = new MeteoService(x);
  });

  it('should have name property set', function() {
    expect(this.testService.name).toBe('Injected Service');
  });

});