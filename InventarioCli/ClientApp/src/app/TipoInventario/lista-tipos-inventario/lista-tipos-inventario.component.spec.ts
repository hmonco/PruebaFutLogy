import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTiposInventarioComponent } from './lista-tipos-inventario.component';

describe('ListaTiposInventarioComponent', () => {
  let component: ListaTiposInventarioComponent;
  let fixture: ComponentFixture<ListaTiposInventarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTiposInventarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTiposInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
