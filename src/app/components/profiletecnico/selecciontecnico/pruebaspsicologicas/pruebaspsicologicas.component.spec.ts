import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaspsicologicasComponent } from './pruebaspsicologicas.component';

describe('PruebaspsicologicasComponent', () => {
  let component: PruebaspsicologicasComponent;
  let fixture: ComponentFixture<PruebaspsicologicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaspsicologicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaspsicologicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
