import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPropietarioInventariosComponent } from './lista-propietario-inventarios.component';

describe('ListaPropietarioInventariosComponent', () => {
  let component: ListaPropietarioInventariosComponent;
  let fixture: ComponentFixture<ListaPropietarioInventariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPropietarioInventariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPropietarioInventariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
