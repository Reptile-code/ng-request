import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPicklistComponent } from './request-picklist.component';

describe('RequestPicklistComponent', () => {
  let component: RequestPicklistComponent;
  let fixture: ComponentFixture<RequestPicklistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RequestPicklistComponent]
    });
    fixture = TestBed.createComponent(RequestPicklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
