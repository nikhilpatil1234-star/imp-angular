import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ApiService],
})
export class AppComponent implements OnInit {
  constructor() {}
  console = console;
  title = 'impangular';
  data = 10;
  data2 = 'second data';
  data3 = 'third data';
  dataFromChild: any;

  userDetails = [
    { name: 'nikhil', age: '25', place: 'yadgir' },
    { name: 'kousik', age: '25', place: 'tumkur' },
    { name: 'rakesh', age: '25', place: 'hubli' },
  ];
  ngOnInit(): void {}
  updateChild() {
    this.data = Math.floor(Math.random() * 100);
    this.data2 = this.data2.toLocaleUpperCase();
    this.data3 = this.data3.toLocaleUpperCase();
  }
  updateData(data: string) {
    // console.log('data', data);
    this.dataFromChild = data;
  }
}
