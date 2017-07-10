import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import {CanComponentDeactivate} from '../app-routing/can-deactivate-guard.service';
import { Piscine } from './piscine.model';
import { Secteur } from './piscine.model';
import { Programmation } from './piscine.model';

import { PiscineService } from './piscine.service';

@Component({
  selector: 'app-piscine',
  templateUrl: './piscine.component.html',
  styleUrls: ['./piscine.component.css']
})
export class PiscineComponent implements OnInit,CanComponentDeactivate {
  piscineData: Piscine = new Piscine();
  secteurs: Array<Secteur>;
  prog: Programmation;  
  editable:boolean;  
  dirty:boolean; // indique si les données ont été changée.

  constructor(private piscineService: PiscineService, private location: Location ) {
    this.editable = false;
    this.dirty = false;
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


   canDeactivate(): Promise<boolean> | boolean {
     console.log("component candeactive");
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (this.dirty) {
      return window.confirm('Discard changes?');
    } else {
      return true;
    }
  }

  togglePlageHoraire(h:number) {
    if (this.editable) {
      this.dirty = true;
      this.prog.topics[h] = !this.prog.topics[h];
    }
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

  setEditable() {
    this.editable = true;
  }
  //Mise à jour des données de programmation de la pompe
  validate() {
    this.piscineService.update(this.prog);
    this.editable = false;
  }
  ngOnInit() {
    this.piscineService.getPiscine().then(piscine => this.piscineData = piscine);

  }

}
