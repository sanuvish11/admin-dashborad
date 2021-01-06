import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAreaNotesComponent } from './work-area-notes.component';

describe('WorkAreaNotesComponent', () => {
  let component: WorkAreaNotesComponent;
  let fixture: ComponentFixture<WorkAreaNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkAreaNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkAreaNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
