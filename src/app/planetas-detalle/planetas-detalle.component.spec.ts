import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetasDetalleComponent } from './planetas-detalle.component';

describe('PlanetasDetalleComponent', () => {
  let component: PlanetasDetalleComponent;
  let fixture: ComponentFixture<PlanetasDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetasDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
