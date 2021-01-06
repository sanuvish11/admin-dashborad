import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendercomComponent } from './calendercom.component';

describe('CalendercomComponent', () => {
  let component: CalendercomComponent;
  let fixture: ComponentFixture<CalendercomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendercomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendercomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
