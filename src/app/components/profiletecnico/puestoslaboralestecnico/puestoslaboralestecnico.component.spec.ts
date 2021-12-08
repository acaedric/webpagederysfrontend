import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuestoslaboralestecnicoComponent } from './puestoslaboralestecnico.component';

describe('PuestoslaboralestecnicoComponent', () => {
  let component: PuestoslaboralestecnicoComponent;
  let fixture: ComponentFixture<PuestoslaboralestecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuestoslaboralestecnicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuestoslaboralestecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
