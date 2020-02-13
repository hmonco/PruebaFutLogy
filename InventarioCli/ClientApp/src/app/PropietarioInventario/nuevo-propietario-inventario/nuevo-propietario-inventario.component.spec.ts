import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPropietarioInventarioComponent } from './nuevo-propietario-inventario.component';

describe('NuevoPropietarioInventarioComponent', () => {
  let component: NuevoPropietarioInventarioComponent;
  let fixture: ComponentFixture<NuevoPropietarioInventarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoPropietarioInventarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoPropietarioInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
