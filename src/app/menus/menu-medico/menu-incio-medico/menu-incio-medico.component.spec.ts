import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIncioMedicoComponent } from './menu-incio-medico.component';

describe('MenuIncioMedicoComponent', () => {
  let component: MenuIncioMedicoComponent;
  let fixture: ComponentFixture<MenuIncioMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuIncioMedicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuIncioMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
