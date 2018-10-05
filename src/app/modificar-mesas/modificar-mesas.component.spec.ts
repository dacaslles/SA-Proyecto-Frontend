import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarMesasComponent } from './modificar-mesas.component';

describe('ModificarMesasComponent', () => {
  let component: ModificarMesasComponent;
  let fixture: ComponentFixture<ModificarMesasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarMesasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarMesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
