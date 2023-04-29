import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLaboratorioComponent } from './navbar-laboratorio.component';

describe('NavbarLaboratorioComponent', () => {
  let component: NavbarLaboratorioComponent;
  let fixture: ComponentFixture<NavbarLaboratorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarLaboratorioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarLaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
