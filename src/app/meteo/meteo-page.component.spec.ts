import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoPageComponent } from './meteo-page.component';

describe('MeteoPageComponent', () => {
  let component: MeteoPageComponent;
  let fixture: ComponentFixture<MeteoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeteoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
