export class Piscine {
  waterTmp: number;
}

export class Secteur {
  nombre:string;
  x:number;
  y:number;
  angle: number;
  constructor(n,angle) {
    this.nombre = n;
    this.angle = angle;
  }
}

export class Programmation {
  plagesHoraires: Array<boolean> = [];
  interrupteur: number;
  constructor() {
    for (var i = 0; i < 24; i++) {
     this.plagesHoraires[i] = false;
    };
  }
}