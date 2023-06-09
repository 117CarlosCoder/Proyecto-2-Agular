import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPacienteComponent } from './navbar-paciente.component';

describe('NavbarPacienteComponent', () => {
  let component: NavbarPacienteComponent;
  let fixture: ComponentFixture<NavbarPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
