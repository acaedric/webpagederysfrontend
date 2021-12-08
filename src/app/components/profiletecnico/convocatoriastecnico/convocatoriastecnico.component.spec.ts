import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocatoriastecnicoComponent } from './convocatoriastecnico.component';

describe('ConvocatoriastecnicoComponent', () => {
  let component: ConvocatoriastecnicoComponent;
  let fixture: ComponentFixture<ConvocatoriastecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvocatoriastecnicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvocatoriastecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
