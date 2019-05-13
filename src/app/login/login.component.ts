import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  userName: string="";
  passWord: string="";
  errorMessage:string="";
  constructor() { }
  login(){
    if(this.userName == null || this.userName == ""){
      console.log("user is name is required");
      this.errorMessage="user name is required filed"
    }
 
  }
 

  

}
