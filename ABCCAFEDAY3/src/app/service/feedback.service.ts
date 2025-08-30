import { Injectable } from '@angular/core';

@Injectable()
export class FeedbackService {

  feedbackData: { order: string, feedback: string }[] = [];

  logFeedback(order: string, feedback: string) {
    this.feedbackData.push({ order, feedback });
    console.log("Feedback logged:", order, feedback);
  }

  getFeedbackData() {
    return this.feedbackData;
  }

  getReviewStats() {
    const stats = {Good: 0, Average: 0, Poor: 0};
    this.feedbackData.forEach(f => {
      if (f.feedback in stats) {
        stats[f.feedback as keyof typeof stats]++;
      }
    });
    return stats;
  }

}
