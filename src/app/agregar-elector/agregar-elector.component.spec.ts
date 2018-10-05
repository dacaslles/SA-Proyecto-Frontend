import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarElectorComponent } from './agregar-elector.component';

describe('AgregarElectorComponent', () => {
  let component: AgregarElectorComponent;
  let fixture: ComponentFixture<AgregarElectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarElectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarElectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
