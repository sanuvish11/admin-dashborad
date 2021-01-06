import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerregistrationComponent } from './volunteerregistration.component';

describe('VolunteerregistrationComponent', () => {
  let component: VolunteerregistrationComponent;
  let fixture: ComponentFixture<VolunteerregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerregistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
