import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaMesasComponent } from './consulta-mesas.component';

describe('ConsultaMesasComponent', () => {
  let component: ConsultaMesasComponent;
  let fixture: ComponentFixture<ConsultaMesasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaMesasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaMesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
