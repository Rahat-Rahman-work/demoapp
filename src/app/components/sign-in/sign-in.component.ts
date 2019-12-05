import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  email: string;
  password: string;
  showErrors ='';
  loggedin= false;

  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

  login(){
    this.auth.login(this.email, this.password);
    //this.loggedin =true;
    
    this.email = this.password = ''; 
  }

}
