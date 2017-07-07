import { Component, OnInit } from '@angular/core';
import { Piscine } from './piscine.model';
import { Secteur } from './piscine.model';
import { Programmation } from './piscine.model';

import { PiscineService } from './piscine.service';

@Component({
  selector: 'app-piscine',
  templateUrl: './piscine.component.html',
  styleUrls: ['./piscine.component.css']
})
export class PiscineComponent implements OnInit {
  piscineData: Piscine = new Piscine();
  secteurs: Array<Secteur>;
  prog: Programmation;

  constructor(private piscineService: PiscineService) {
    this.secteurs = new Array<Secteur>();
    let alpha = 2*Math.PI / 12;
    let ray = 150;
    for (var i = 0; i < 12; i++) {
      let secteur = new Secteur("" + i, alpha);
      let alphaI = Math.PI/2 - (alpha*i);
      secteur.x = ray * Math.cos(alphaI);
      secteur.y = ray * Math.sin(alphaI);
      this.secteurs.push(secteur);
    }
    this.prog = this.piscineService.getProgrammation();

  }

  togglePlageHoraire(h:number) {
    this.prog.topics[h] = !this.prog.topics[h];
  }
  getClass(i:number) {
    if (this.prog.topics[i]) {
      return "active"
    }
  }
  getTotalHeure() {
    var total = 0;
    for (var item of this.prog.topics) {
      if (item) {
        total++;
      }
    }
    return total;
  }
  ngOnInit() {
    this.piscineService.getPiscine().then(piscine => this.piscineData = piscine);

  }

}
