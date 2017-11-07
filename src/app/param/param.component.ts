import { Component, OnInit, Input } from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{title}}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <input type="text" [(ngModel)]="value"/>     
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.dismiss('')">Annuler</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close(value)">Ok</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() title;
  @Input() value;


  constructor(public activeModal: NgbActiveModal) { }
}


@Component({
  selector: 'app-param',
  templateUrl: './param.component.html',
  styleUrls: ['./param.component.css']
})
export class ParamComponent implements OnInit {
  @LocalStorage
  public urlServer: string;

  @LocalStorage
  public userName: string;

  @LocalStorage
  public password: string;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    //this.urlServer = "http://145.239.73.63:3001/api/piscine/programmation";
    this.urlServer = "http://localhost:3001/api/piscine/programmation";
    this.userName = "domobox";
    this.password = "domoboxpw";
  }

  editParam(value: string, propertyName: string) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.title = propertyName;
    modalRef.componentInstance.value = value;
    modalRef.result.then((result) => {
      localStorage.setItem(propertyName, result);
    }, (reason) => {
      console.log("dismiss");
    });

  }

}

/**
 * LocalStorage for storing string values 
 */
export function LocalStorage(
  target: Object, // The prototype of the class
  decoratedPropertyName: string // The name of the property
) {

  // get and set methods
  Object.defineProperty(target, decoratedPropertyName, {
    get: function () {
      return localStorage.getItem(decoratedPropertyName) || '';
    },
    set: function (newValue) {
      localStorage.setItem(decoratedPropertyName, newValue);
    }
  });
}
