import { Component } from '@angular/core';
import { IeLibService } from 'ie-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  date?: Date;
  constructor(private readonly service: IeLibService) {
    this.service.promiseTest().then(date => {this.date = date; console.log(date)});
  }
}
