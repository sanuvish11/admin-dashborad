import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrongsComponent } from './strongs.component';

describe('StrongsComponent', () => {
  let component: StrongsComponent;
  let fixture: ComponentFixture<StrongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrongsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
