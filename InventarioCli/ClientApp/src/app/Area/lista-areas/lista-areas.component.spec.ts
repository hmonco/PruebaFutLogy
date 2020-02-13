import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAreasComponent } from './lista-areas.component';

describe('ListaAreasComponent', () => {
  let component: ListaAreasComponent;
  let fixture: ComponentFixture<ListaAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
