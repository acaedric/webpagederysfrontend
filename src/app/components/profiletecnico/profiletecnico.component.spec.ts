import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiletecnicoComponent } from './profiletecnico.component';

describe('ProfiletecnicoComponent', () => {
  let component: ProfiletecnicoComponent;
  let fixture: ComponentFixture<ProfiletecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfiletecnicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfiletecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
