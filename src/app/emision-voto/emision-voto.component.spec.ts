import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmisionVotoComponent } from './emision-voto.component';

describe('EmisionVotoComponent', () => {
  let component: EmisionVotoComponent;
  let fixture: ComponentFixture<EmisionVotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmisionVotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmisionVotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
