import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInicioLaboratorioComponent } from './menu-inicio-laboratorio.component';

describe('MenuInicioLaboratorioComponent', () => {
  let component: MenuInicioLaboratorioComponent;
  let fixture: ComponentFixture<MenuInicioLaboratorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuInicioLaboratorioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuInicioLaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
