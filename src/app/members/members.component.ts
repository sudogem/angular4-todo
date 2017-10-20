import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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
