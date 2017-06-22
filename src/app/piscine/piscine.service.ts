import { Injectable } from '@angular/core';
import { Piscine } from './piscine.model';

const DATA_PISCINE: Piscine = { waterTmp: 25};

@Injectable()
export class PiscineService {

  constructor() { }

  getPiscine() : Promise<Piscine> {
      console.log("datapiscine="+ DATA_PISCINE);
      return Promise.resolve(DATA_PISCINE);
  }
}