import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificaciondecvComponent } from './verificaciondecv.component';

describe('VerificaciondecvComponent', () => {
  let component: VerificaciondecvComponent;
  let fixture: ComponentFixture<VerificaciondecvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificaciondecvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificaciondecvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
