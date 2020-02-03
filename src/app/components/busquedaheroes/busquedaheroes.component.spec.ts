import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaheroesComponent } from './busquedaheroes.component';

describe('BusquedaheroesComponent', () => {
  let component: BusquedaheroesComponent;
  let fixture: ComponentFixture<BusquedaheroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaheroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
