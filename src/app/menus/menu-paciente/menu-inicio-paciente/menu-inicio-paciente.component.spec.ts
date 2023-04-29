import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInicioPacienteComponent } from './menu-inicio-paciente.component';

describe('MenuInicioPacienteComponent', () => {
  let component: MenuInicioPacienteComponent;
  let fixture: ComponentFixture<MenuInicioPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuInicioPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuInicioPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
