import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { FeedbackService } from '../service/feedback.service';

@Component({
  selector: 'app-consume-review',
  templateUrl: './consume-review.component.html',
  styleUrls: ['./consume-review.component.css']
})
export class ConsumeReviewComponent {
  isVisible: boolean = true;
  constructor(private feedbackService: FeedbackService) {}

  submitReview(review: string) {
    this.feedbackService.logFeedback(review);
    this.isVisible = false;
  }
}
