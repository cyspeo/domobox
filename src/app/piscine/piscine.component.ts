import { Component, OnInit } from '@angular/core';
import { Piscine } from './piscine.model';
import { PiscineService } from './piscine.service';

@Component({
  selector: 'app-piscine',
  templateUrl: './piscine.component.html',
  styleUrls: ['./piscine.component.css']
})
export class PiscineComponent implements OnInit {
  piscineData: Piscine  = new Piscine();
  constructor(private piscineService: PiscineService) { }

  ngOnInit() {
    this.piscineService.getPiscine().then(piscine => this.piscineData = piscine);
  }

}
