import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarIncioComponent } from './navbar-incio.component';

describe('NavbarIncioComponent', () => {
  let component: NavbarIncioComponent;
  let fixture: ComponentFixture<NavbarIncioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarIncioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarIncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
