import { Component, OnInit } from '@angular/core';
import { SuperHero } from '../superHero';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit {
  superHero: any;
  data: any = [];
  value: any;
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.superHero = [
      { Id: 1, name: 'ironman' },
      { Id: 2, name: 'thor' },
      { Id: 3, name: 'spiderman' },
      { Id: 4, name: 'hulk' },
    ];
    this.getData();
  }
  getData() {
    this.apiService.getData().subscribe(
      (data) => {
        this.data = data;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}
