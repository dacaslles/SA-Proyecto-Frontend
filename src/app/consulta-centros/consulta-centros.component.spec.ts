import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaCentrosComponent } from './consulta-centros.component';

describe('ConsultaCentrosComponent', () => {
  let component: ConsultaCentrosComponent;
  let fixture: ComponentFixture<ConsultaCentrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaCentrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaCentrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
