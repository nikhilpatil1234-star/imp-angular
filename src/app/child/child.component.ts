import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input() item: any;
  @Input() item2: any;
  @Input() item3: any;
  @Input() details: any;
}
