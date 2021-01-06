import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalFavsComponent } from './personal-favs.component';

describe('PersonalFavsComponent', () => {
  let component: PersonalFavsComponent;
  let fixture: ComponentFixture<PersonalFavsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalFavsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalFavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
