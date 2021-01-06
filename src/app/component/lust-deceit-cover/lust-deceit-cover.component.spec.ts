import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LustDeceitCoverComponent } from './lust-deceit-cover.component';

describe('LustDeceitCoverComponent', () => {
  let component: LustDeceitCoverComponent;
  let fixture: ComponentFixture<LustDeceitCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LustDeceitCoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LustDeceitCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
