import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";

import { Router } from "@angular/router";


@Injectable({ 
  providedIn: 'root'
})
export class AuthService {

  showError ='';
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, public router: Router ) { 

  }

  login(email: string, password: string){
    
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
      value => {
        console.log('Done', value);
        this.router.navigate(['dashboard']);
      }
    ).catch( err => {
      this.showError = err.message;
      console.log('Something went Wrong: ', err.message);
      //this.router.navigate(['sign-up']);
    })
  }

  signup(email: string, password: string){
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
      value => {
        console.log('Success', value);
        this.router.navigate(['dashboard']);
      }
    ).catch( err => {
      console.log('Something went Wrong: ', err.message);
    })
  }

  logout(){
    this.afAuth.auth.signOut();
    this.router.navigate(['sign-in']);
  }


}
