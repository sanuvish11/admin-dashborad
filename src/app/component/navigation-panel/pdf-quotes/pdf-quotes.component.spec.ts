import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfQuotesComponent } from './pdf-quotes.component';

describe('PdfQuotesComponent', () => {
  let component: PdfQuotesComponent;
  let fixture: ComponentFixture<PdfQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfQuotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
