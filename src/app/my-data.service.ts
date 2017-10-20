import { Injectable } from '@angular/core';

@Injectable()
export class MyDataService {

  constructor() { }

  obj = {
    id: "1",
    name: "john",
    rollno: "1234"
  }

  fail() {
    return "Fail";
  }

  success() {
    return "Successful";
  }

}
