import { Component, OnInit } from '@angular/core';

import { UsersService } from "../../services/users.service";
import { AuthService } from './../../services/auth.service';

import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

import{ User } from "../../models/user";


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  profileForm: FormGroup;

  user: User = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    house_no: '',
    area: ''

  }

  constructor( public userService: UsersService,public auth: AuthService) { }

  ngOnInit() {
    
  }

  onSubmit(){
    if(this.user.name !='' && this.user.email !='' && this.user.password !='' && this.user.house_no !='' && this.user.area !='' && this.user.confirmPassword !=''){
      //debugger;
      this.auth.signup(this.user.email, this.user.password );
      this.userService.addUser(this.user);
      
      //console.log(this.user);
      this.user.name='';
      this.user.email='';
      this.user.password='';
      this.user.confirmPassword='';
      this.user.house_no='';
      this.user.area='';
    }
  }

}
