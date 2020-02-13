import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoTipoInventarioComponent } from './nuevo-tipo-inventario.component';

describe('NuevoTipoInventarioComponent', () => {
  let component: NuevoTipoInventarioComponent;
  let fixture: ComponentFixture<NuevoTipoInventarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoTipoInventarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoTipoInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
