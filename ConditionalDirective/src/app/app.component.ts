import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ConditionalDirective';

  videos = [
    {
      id: 1,
      title: "Exploring the Mountains - Travel Vlog",
      thumbnail: "https://placehold.co/600x400?text=Video+1",
      likes: 1200,
      dislikes: 50,
      shares: 300,
    },
    {
      id: 2,
      title: "Top 10 JavaScript Tricks You Didn't Know",
      thumbnail: "https://placehold.co/600x400?text=Video+2",
      likes: 950,
      dislikes: 30,
      shares: 210,
    },
    {
      id: 3,
      title: "Cooking the Perfect Pasta in 10 Minutes",
      thumbnail: "https://placehold.co/600x400?text=Video+3",
      likes: 1500,
      dislikes: 70,
      shares: 400,
    },
    {
      id: 4,
      title: "React vs Angular vs Vue - 2025 Comparison",
      thumbnail: "https://placehold.co/600x400?text=Video+4",
      likes: 870,
      dislikes: 40,
      shares: 180,
    },
    {
      id: 5,
      title: "Morning Yoga Routine for Beginners",
      thumbnail: "https://placehold.co/600x400?text=Video+5",
      likes: 2100,
      dislikes: 60,
      shares: 500,
    },
  ]

  mostLikedVideo = this.getmostLikedVideo();

  getmostLikedVideo() {
    let videoCopy = [...this.videos];

    // next.likes = 10 and curr.likes = 5, then next.likes - curr.likes will be positive and next will come first.
    return videoCopy.sort((curr, next) => next.likes - curr.likes)[0];
  }
}
