import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeReviewComponent } from './consume-review.component';

describe('ConsumeReviewComponent', () => {
  let component: ConsumeReviewComponent;
  let fixture: ComponentFixture<ConsumeReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsumeReviewComponent]
    });
    fixture = TestBed.createComponent(ConsumeReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
