import { Injectable } from '@angular/core';
import { Piscine } from './piscine.model';
import { Programmation } from './piscine.model';

const DATA_PISCINE: Piscine = { waterTmp: 25};

@Injectable()
export class PiscineService {

  constructor() { }

  getPiscine() : Promise<Piscine> {
      console.log("datapiscine="+ DATA_PISCINE);
      return Promise.resolve(DATA_PISCINE);
  }

  getProgrammation() {
    var prog = new Programmation();
    prog.topics[0] = true;
    prog.topics[1] = true;
    prog.topics[2] = true;
    prog.topics[3] = true;
    prog.topics[4] = true;
    prog.topics[5] = true;
    prog.topics[6] = true;
    prog.topics[7] = true;
    prog.topics[8] = false;
    prog.topics[9] = true;
    prog.topics[10] = false;
    prog.topics[11] = false;
    prog.topics[12] = false;
    prog.topics[13] = false;
    prog.topics[14] = false;
    prog.topics[15] = false;
    prog.topics[16] = false;
    prog.topics[17] = true;
    prog.topics[18] = true;
    prog.topics[19] = true;
    prog.topics[20] = true;
    prog.topics[21] = true;
    prog.topics[22] = true;
    prog.topics[23] = true;
    return prog;
  }
}