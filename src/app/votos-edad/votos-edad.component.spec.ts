import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotosEdadComponent } from './votos-edad.component';

describe('VotosEdadComponent', () => {
  let component: VotosEdadComponent;
  let fixture: ComponentFixture<VotosEdadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotosEdadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotosEdadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
