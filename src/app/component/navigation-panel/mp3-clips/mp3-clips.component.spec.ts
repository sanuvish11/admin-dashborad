import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mp3ClipsComponent } from './mp3-clips.component';

describe('Mp3ClipsComponent', () => {
  let component: Mp3ClipsComponent;
  let fixture: ComponentFixture<Mp3ClipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mp3ClipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mp3ClipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
