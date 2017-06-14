import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavesDetalleComponent } from './naves-detalle.component';

describe('NavesDetalleComponent', () => {
  let component: NavesDetalleComponent;
  let fixture: ComponentFixture<NavesDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavesDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavesDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
