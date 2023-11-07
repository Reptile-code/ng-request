import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineRequestsComponent } from './request-timeline.component';

describe('TimelineRequestsComponent', () => {
  let component: TimelineRequestsComponent;
  let fixture: ComponentFixture<TimelineRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TimelineRequestsComponent],
    });
    fixture = TestBed.createComponent(TimelineRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
