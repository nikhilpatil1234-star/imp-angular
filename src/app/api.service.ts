import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/photos?_limit=50'
    );
  }
  // dataEmitter = new EventEmitter<string>();
  dataEmitter = new Subject<string>();
  provideData(data: string) {
    // return this.dataEmitter.emit(data);
    this.dataEmitter.next(data);
  }
}
