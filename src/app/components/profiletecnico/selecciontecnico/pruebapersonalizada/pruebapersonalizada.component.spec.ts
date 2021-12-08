import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebapersonalizadaComponent } from './pruebapersonalizada.component';

describe('PruebapersonalizadaComponent', () => {
  let component: PruebapersonalizadaComponent;
  let fixture: ComponentFixture<PruebapersonalizadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebapersonalizadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebapersonalizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
