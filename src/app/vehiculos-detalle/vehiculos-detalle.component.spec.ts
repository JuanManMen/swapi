import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculosDetalleComponent } from './vehiculos-detalle.component';

describe('VehiculosDetalleComponent', () => {
  let component: VehiculosDetalleComponent;
  let fixture: ComponentFixture<VehiculosDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculosDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
