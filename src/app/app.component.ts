import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tilesKart21  welcome Angular 6';
  name="naresh";
  age=22;
  married=false;
   JohnAccount:any={ name:"john",age:19,salary:100000}
}
