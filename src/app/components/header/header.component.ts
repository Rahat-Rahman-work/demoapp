import { SignInComponent } from './../sign-in/sign-in.component';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit { 

  title = 'Demo App';
  user: firebase.User;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    debugger;
    this.auth.getLoggedInUser().subscribe(user =>{
      this.user = user;
      //debugger;
    })
  }
  
  //loginvalue= this.auth.loggedin;


  logout(){
    this.auth.logout();
  }

}
