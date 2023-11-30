import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss'],
})
export class Child2Component implements OnInit {
  nam: any;
  console = console;
  example: any;
  @Output() updateDataEvent = new EventEmitter();
  @Output() public updateDataEvent2 = new EventEmitter();
  update(x: any) {
    this.updateDataEvent2.emit(x);
    this.example = '';
  }
  names(x: any) {
    this.nam = x;
    console.log('x', x);
  }
  ngOnInit(): void {}
}
