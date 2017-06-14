import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspeciesDetalleComponent } from './especies-detalle.component';

describe('EspeciesDetalleComponent', () => {
  let component: EspeciesDetalleComponent;
  let fixture: ComponentFixture<EspeciesDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspeciesDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspeciesDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
