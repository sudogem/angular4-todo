import { Component } from '@angular/core';

import { MyDataService } from './my-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form;
  constructor(private newService: MyDataService) {

  }

  ngOnInit() {
    console.log('AppComponent OnInit:',this.newService.obj);
    this.newService.obj.name = "Rea";
    console.log(this.newService.obj);
  }

}
