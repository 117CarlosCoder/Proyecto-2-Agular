import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesLaboratoriosComponent } from './reportes-laboratorios.component';

describe('ReportesLaboratoriosComponent', () => {
  let component: ReportesLaboratoriosComponent;
  let fixture: ComponentFixture<ReportesLaboratoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportesLaboratoriosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportesLaboratoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
