import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = ["apple", "banana", "camote"];
  newItem = "";
  pushItem = () => {
    if (this.newItem != "") {
      this.items.push(this.newItem);
      this.newItem = "";
    }
  }
  removeItem = (index) => {
    this.items.splice(index, 1);
  }
}
