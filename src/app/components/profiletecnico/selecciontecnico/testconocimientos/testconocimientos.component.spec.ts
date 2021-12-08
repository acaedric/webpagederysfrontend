import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestconocimientosComponent } from './testconocimientos.component';

describe('TestconocimientosComponent', () => {
  let component: TestconocimientosComponent;
  let fixture: ComponentFixture<TestconocimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestconocimientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestconocimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
