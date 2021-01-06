import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatQueueComponent } from './chat-queue.component';

describe('ChatQueueComponent', () => {
  let component: ChatQueueComponent;
  let fixture: ComponentFixture<ChatQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatQueueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
