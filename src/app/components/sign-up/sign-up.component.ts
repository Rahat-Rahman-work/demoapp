import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

email: string;
password: string;

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  signup(){
    this.auth.signup(this.email, this.password);
    this.email = this.password = '';
  }

}
