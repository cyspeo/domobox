import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiscineComponent } from './piscine.component';

describe('PiscineComponent', () => {
  let component: PiscineComponent;
  let fixture: ComponentFixture<PiscineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiscineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiscineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
