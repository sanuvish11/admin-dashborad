import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarnaStatisticsComponent } from './barna-statistics.component';

describe('BarnaStatisticsComponent', () => {
  let component: BarnaStatisticsComponent;
  let fixture: ComponentFixture<BarnaStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarnaStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarnaStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
