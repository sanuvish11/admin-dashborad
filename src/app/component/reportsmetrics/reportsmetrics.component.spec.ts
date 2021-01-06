import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsmetricsComponent } from './reportsmetrics.component';

describe('ReportsmetricsComponent', () => {
  let component: ReportsmetricsComponent;
  let fixture: ComponentFixture<ReportsmetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsmetricsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsmetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
