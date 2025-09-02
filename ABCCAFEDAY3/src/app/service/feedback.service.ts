import { Injectable } from '@angular/core';

@Injectable()
export class FeedbackService {

  orderId!: number;
  private feedbackData: { order: number, feedback: string }[] = [];
  stats = {Good: 0, Average: 0, Poor: 0};

  logFeedback(feedback: string) {
     if (!this.orderId) {
      alert('Order ID not set before logging feedback');
      return;
    }
    this.feedbackData.push({ order: this.orderId, feedback: feedback });
  }

  getFeedbackData() {
    return this.feedbackData;
  }

  getReviewStats() {
    this.stats = { Good: 0, Average: 0, Poor: 0 };
    this.feedbackData.forEach(f => {
      if (f.feedback in this.stats) {
        this.stats[f.feedback as keyof typeof this.stats]++;
      }
    });
    return this.stats;
  }

  getPerformanceMessage(): string {
    const { Good, Average, Poor } = this.stats;
    console.log(Good, Average, Poor);

    if (Good > Average && Good > Poor) {
      return "Excellent";
    } 
    else if (Average > Good && Average > Poor) {
      return "Average Performance";
    } 
    else if (Poor > Good && Poor > Average) {
      return "Needs Improvement";
    }

    return "No Reviews Yet";
  }


}
