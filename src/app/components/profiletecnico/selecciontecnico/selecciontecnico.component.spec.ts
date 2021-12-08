import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecciontecnicoComponent } from './selecciontecnico.component';

describe('SelecciontecnicoComponent', () => {
  let component: SelecciontecnicoComponent;
  let fixture: ComponentFixture<SelecciontecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecciontecnicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecciontecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
