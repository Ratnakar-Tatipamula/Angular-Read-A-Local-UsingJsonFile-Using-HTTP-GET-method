import { Component } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // products: any = [];

  constructor(private http:HttpClient){

  }

  ngOnInit(){
  this.http.get("assets/test.json").subscribe(data =>{
    console.log(data);
    // this.products = data;
    // console.log(this.products)
  })
  console.log("hello");
 }

}
