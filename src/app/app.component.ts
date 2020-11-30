import { Counter } from './models/counter';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-counter-group';
  counter = new Counter();
  account: number = 10;
}
