import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../my-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private newService: MyDataService) { }

  ngOnInit() {
    console.log('ProductComponent OnInit:',this.newService.obj);
  }

}
