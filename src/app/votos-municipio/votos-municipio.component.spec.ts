import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotosMunicipioComponent } from './votos-municipio.component';

describe('VotosMunicipioComponent', () => {
  let component: VotosMunicipioComponent;
  let fixture: ComponentFixture<VotosMunicipioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotosMunicipioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotosMunicipioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
