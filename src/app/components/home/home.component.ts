import { Component } from '@angular/core';
import { IeLibService } from 'ie-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  date?: Date;
  constructor(private readonly service: IeLibService) {
    this.service.promiseTest().then(date => {this.date = date; console.log(date)});
  }
}
