import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss'],
})
export class Comp2Component implements OnInit {
  inputText: any;
  constructor(public apiService: ApiService) {}
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    return this.apiService.dataEmitter.subscribe((val) => {
      this.inputText = val;
    });
  }
}
