import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenmedicoComponent } from './examenmedico.component';

describe('ExamenmedicoComponent', () => {
  let component: ExamenmedicoComponent;
  let fixture: ComponentFixture<ExamenmedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenmedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenmedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
