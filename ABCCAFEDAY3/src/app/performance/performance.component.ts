import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../service/feedback.service';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit{
  message: string = '';
  stats = {Good: 0, Average: 0, Poor: 0,};
  showStat: boolean = false;
  
  constructor(private feedbackService: FeedbackService) {}

  ngOnInit() {
    this.feedbackService.getReviewStats();
    this.message = this.feedbackService.getPerformanceMessage();
  }

  showStats() {
    this.stats = this.feedbackService.getReviewStats();
    this.showStat = true
  }
}
