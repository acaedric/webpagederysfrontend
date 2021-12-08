import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfiltecnicoComponent } from './perfiltecnico.component';

describe('PerfiltecnicoComponent', () => {
  let component: PerfiltecnicoComponent;
  let fixture: ComponentFixture<PerfiltecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfiltecnicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfiltecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
