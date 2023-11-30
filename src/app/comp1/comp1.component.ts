import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component {
  constructor(public apiService: ApiService) {}

  enterText: string = '';
  onButtonClick() {
    this.apiService.provideData(this.enterText);
    this.enterText = '';
  }
}
