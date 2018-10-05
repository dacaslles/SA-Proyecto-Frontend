import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCentroComponent } from './agregar-centro.component';

describe('AgregarCentroComponent', () => {
  let component: AgregarCentroComponent;
  let fixture: ComponentFixture<AgregarCentroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarCentroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
