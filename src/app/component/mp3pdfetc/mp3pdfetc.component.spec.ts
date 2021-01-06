import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mp3pdfetcComponent } from './mp3pdfetc.component';

describe('Mp3pdfetcComponent', () => {
  let component: Mp3pdfetcComponent;
  let fixture: ComponentFixture<Mp3pdfetcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mp3pdfetcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mp3pdfetcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
