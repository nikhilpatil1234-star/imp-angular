import { Component, OnInit } from '@angular/core';
import { Observable, filter, from, interval, map, observable, of } from 'rxjs';

@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrls: ['./observable-example.component.scss'],
})
export class ObservableExampleComponent implements OnInit {
  // by constructor method
  // myObservable = new Observable((observer) => {
  //   console.log('observable starts');
  //   setTimeout(() => {
  //     observer.next('1');
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next('2');
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next('3');
  //   }, 3000);
  //   setTimeout(() => {
  //     observer.next('4');
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.error(new Error('something went wrong my own error'));
  //   }, 4000);

  //   setTimeout(() => {
  //     observer.next('5');
  //   }, 5000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 6000);

  //   observer.next('1');
  //   observer.next('2');
  //   observer.next('3');
  //   observer.next('4');
  //   observer.next('5');
  //   //by create method
  // });
  //by create method
  // myObservable = Observable.create((observer: any) => {
  //   console.log('observable starts');
  //   setTimeout(() => {
  //     observer.next('1');
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next('2');
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next('3');
  //   }, 3000);
  //   setTimeout(() => {
  //     observer.next('4');
  //   }, 4000);
  //   // setTimeout(() => {
  //   //   observer.error(new Error('something went wrong my own error'));
  //   // }, 4000);

  //   setTimeout(() => {
  //     observer.next('5');
  //   }, 5000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 6000);
  // });
  //by of method
  // array1 = [1, 2, 3, 4, 5, 6];
  // array2 = ['a', 'b', 'c', 'd'];
  // myObservable = of(this.array1, this.array2);
  //by from method
  array = [1, 2, 3, 4, 5, 6];
  myObservable = from(this.array);
  // operators in rxjs
  transFromedObser = this.myObservable
    .pipe
    // map((val) => {
    //   return 5 * val;
    // })
    // filter((val) => {
    //   return val > 4;
    // })
    ();
  couterObservable = interval(1000);
  intevalData: number = 0;
  countSab: any;
  ngOnInit(): void {
    this.myObservable.subscribe(
      (val: any) => {
        console.log('val', val);
      }
      // (error: any) => alert(error),
      // () => {
      //   alert('observable completed all the emiting value');
      // }
    );
    this.transFromedObser.subscribe(
      (val: any) => {
        console.log('val', val);
      }
      // (error: any) => {
      //   alert(error.message);
      // },
      // () => {
      //   alert('completed');
      // }
    );
  }
  Subsribe() {
    this.countSab = this.couterObservable.subscribe((val) => {
      this.intevalData = val;
      console.log('val', val);
    });
  }
  UnSubsribe() {
    this.countSab.unsubscribe();
  }
}
