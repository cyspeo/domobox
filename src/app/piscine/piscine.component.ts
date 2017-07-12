import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

import { CanComponentDeactivate } from '../app-routing/can-deactivate-guard.service';
import { Piscine } from './piscine.model';
import { Secteur } from './piscine.model';
import { Programmation } from './piscine.model';

import { PiscineService } from './piscine.service';

@Component({
  selector: 'app-piscine',
  templateUrl: './piscine.component.html',
  styleUrls: ['./piscine.component.css'],
  animations: [
    trigger('btnState', [
      state('inactive', style({
        bottom: '50px',
      })),
      state('active', style({
        bottom: 'auto',
        top: '50px',
      })),
      /* Enchainement movement et disparition
      transition('inactive => active', [
        animate('210ms', keyframes([
          style({bottom: '50px',offset: 0}),
          style({bottom: 'auto',top:'50px',offset: 0.5}),
          style({bottom: 'auto',top:'50px',offset: 0.8}),
          style({opacity: '0',offset: 1.0})
        ]))
      ]),*/
      transition('inactive => active', animate('210ms ease-out')),
      transition('active => inactive', animate('210ms ease-out'))
    ])
  ]
})
export class PiscineComponent implements OnInit {
  piscineData: Piscine = new Piscine();
  secteurs: Array<Secteur>;
  prog: Programmation;
  editable: boolean;
  state: string;
  dirty: boolean; // indique si les données ont été changée.
  errorMessage: any;

  constructor(private piscineService: PiscineService, private location: Location) {
    this.editable = false;
    this.state = 'inactive';
    this.dirty = false;
    this.secteurs = new Array<Secteur>();
    let alpha = 2 * Math.PI / 12;
    let ray = 150;
    for (var i = 0; i < 12; i++) {
      let secteur = new Secteur("" + i, alpha);
      let alphaI = Math.PI / 2 - (alpha * i);
      secteur.x = ray * Math.cos(alphaI);
      secteur.y = ray * Math.sin(alphaI);
      this.secteurs.push(secteur);
    }
    this.prog = new Programmation();
    this.piscineService.getProgrammation()
      .subscribe(response => {
        this.prog = response;
        console.log("response  " + JSON.stringify(response))
      },
      error => this.errorMessage = <any>error);


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

  togglePlageHoraire(h: number) {
    if (this.editable) {
      this.dirty = true;
      this.prog.plagesHoraires[h] = !this.prog.plagesHoraires[h];
    }
  }
  getClass(i: number) {
    if (this.prog.plagesHoraires[i]) {
      return "active"
    }
  }
  getTotalHeure() {
    var total = 0;
    for (var item of this.prog.plagesHoraires) {
      if (item) {
        total++;
      }
    }
    return total;
  }
  // Passage du mode consultation à edition et inversemment
  clicAction() {
    if (!this.editable) {
      this.editable = true;
      this.state = 'active';
    } else {
      this.validate();
    }


  }
  //Mise à jour des données de programmation de la pompe
  validate() {
    if (this.prog) {
      this.piscineService.update(this.prog)
        .subscribe(response => {
          this.prog = response
          //console.log("response  " + JSON.stringify(response))
        },
        error => this.errorMessage = <any>error);
    }

    this.piscineService.update(this.prog);
    this.editable = false;
    this.state = 'inactive';
    this.dirty = false;
  }
  ngOnInit() {
    this.piscineService.getPiscine().then(piscine => this.piscineData = piscine);

  }

}
