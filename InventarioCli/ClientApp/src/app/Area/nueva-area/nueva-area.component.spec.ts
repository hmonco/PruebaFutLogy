import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaAreaComponent } from './nueva-area.component';

describe('NuevaAreaComponent', () => {
  let component: NuevaAreaComponent;
  let fixture: ComponentFixture<NuevaAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
