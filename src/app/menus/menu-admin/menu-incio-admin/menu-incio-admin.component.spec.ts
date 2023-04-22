import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIncioAdminComponent } from './menu-incio-admin.component';

describe('MenuIncioAdminComponent', () => {
  let component: MenuIncioAdminComponent;
  let fixture: ComponentFixture<MenuIncioAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuIncioAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuIncioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
