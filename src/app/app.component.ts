import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  click = 0;
  dataTagListSorted = [];
  starPush = [];

  insertStart() {
    this.starPush = [];
    this.click = this.click + 1;
    for (var i = 0; i < this.click; i++) {
      this.starPush.push("*");
    }
    this.dataTagListSorted.push(this.starPush.toString().replace(/,/g, ''));
  }
}
