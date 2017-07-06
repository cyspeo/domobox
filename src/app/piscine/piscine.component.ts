import { Component, OnInit } from '@angular/core';
import { Piscine } from './piscine.model';
import { Secteur } from './piscine.model';
import { PiscineService } from './piscine.service';

@Component({
  selector: 'app-piscine',
  templateUrl: './piscine.component.html',
  styleUrls: ['./piscine.component.css']
})
export class PiscineComponent implements OnInit {
  piscineData: Piscine  = new Piscine();
  secteurs: Array<Secteur>;
  constructor(private piscineService: PiscineService) { 
    this.secteurs = new Array<Secteur>();
    for (var i = 0; i< 24; i++) {
      this.secteurs.push(new Secteur(""+i));
    }
    
  }

  ngOnInit() {
    this.piscineService.getPiscine().then(piscine => this.piscineData = piscine);
    
  }

}
