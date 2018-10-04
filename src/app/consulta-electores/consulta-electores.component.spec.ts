import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaElectoresComponent } from './consulta-electores.component';

describe('ConsultaElectoresComponent', () => {
  let component: ConsultaElectoresComponent;
  let fixture: ComponentFixture<ConsultaElectoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaElectoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaElectoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
