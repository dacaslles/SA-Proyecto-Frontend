import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotosGeneralComponent } from './votos-general.component';

describe('VotosGeneralComponent', () => {
  let component: VotosGeneralComponent;
  let fixture: ComponentFixture<VotosGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotosGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotosGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
