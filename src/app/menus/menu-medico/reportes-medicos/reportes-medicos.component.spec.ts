import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesMedicosComponent } from './reportes-medicos.component';

describe('ReportesMedicosComponent', () => {
  let component: ReportesMedicosComponent;
  let fixture: ComponentFixture<ReportesMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportesMedicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportesMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
