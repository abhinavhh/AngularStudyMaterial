import { Component, OnInit } from '@angular/core';
import { filter, from, interval, map, Observable, of, Subscription } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit{
  title = 'Observables';

   constructor(private dataService: DataService) {}
  //  create observable using constructor

  // myObservable = new Observable((observer) => {
  //   console.log('Observable starts')
  //   setTimeout(() => {observer.next("1")}, 1000)
  //   setTimeout(() => {observer.next("2")}, 3000)
  //   setTimeout(() => {observer.next("3")}, 3000)

  //   // emit error
  //   // setTimeout(() => {observer.error(new Error('Something went wrong '))}, 3000)
  //   setTimeout(() => {observer.next("4")}, 4000)
  //   setTimeout(() => {observer.next("5")}, 5000)

  //   // emit complete signal
  //   setTimeout(() => {observer.complete()}, 6000)

  // });

  //  CREATE USING CREATE()
  // myObservable = Observable.create((observer: any) => {
  //   setTimeout(() => {observer.next("1")}, 1000)
  //   setTimeout(() => {observer.next("2")}, 3000)
  //   setTimeout(() => {observer.next("3")}, 3000)

  //   // emit error
  //   // setTimeout(() => {observer.error(new Error('Something went wrong '))}, 3000)
  //   setTimeout(() => {observer.next("4")}, 4000)
  //   setTimeout(() => {observer.next("5")}, 5000)

  //   // emit complete signal
  //   setTimeout(() => {observer.complete()}, 6000)
  // });

  // OBSERVABLE USING OF()
  array1: number[] = [1, 2, 3, 4, 5, 6, 7];
  array2: string[] = ['A', 'B', 'C'];
  // myObservable = of(this.array1, this.array2);
  // OBSERVABLE USING FROM()

  // myObservable = from(this.array1);

  // OPERATOR CODE - map()
  // newObs = this.myObservable.pipe(map((val) => {
  //   // map accepts call back function as argument
  //   return val * 5; // return new array with values multiplied by 5
  //   // update ngOninit() use newObs
  // }));

  // newObs2 = this.newObs.pipe(filter((val) => {
  //  return val >= 30;
  // }))
  
  // we dont need to again and again do this we can pass filter operator as second argument in pipe function.


  // INTERVAL FUNCTION - UNSUBSCRIBE

  counterObservable = interval(1000);
  counterSub!: Subscription;
  
  ngOnInit() {
  //   this.newObs2.subscribe((val: any) => {
  //     console.log(val);
  //   }, (err: any) => {
  //     alert(err.message);
  //   }, () => {
  //     alert('Observalble has complete emitting all values');
  //   })

  // INTERVAL
    this.counterSub = this.counterObservable.subscribe((val) => {
      console.log(val)
    })
  }
  unsubscribe() {
    this.counterSub.unsubscribe();
  }
}
