import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrevistafinalComponent } from './entrevistafinal.component';

describe('EntrevistafinalComponent', () => {
  let component: EntrevistafinalComponent;
  let fixture: ComponentFixture<EntrevistafinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrevistafinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrevistafinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
