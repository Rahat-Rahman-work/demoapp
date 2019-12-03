import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Observable<User[]>;

  userDoc: AngularFirestoreDocument<User>;

  usersCollection: AngularFirestoreCollection<User>;
  email: string;
  password: string;
  confirmPassword: string;
  area: string;
  house_no: string;
  //public auth: AuthService;

  constructor(public afs: AngularFirestore) { 
    this.usersCollection =afs.collection<User>('users');
    //this.users= this.afs.collection('users').valueChanges();

    this.users = this.usersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
   }

   getUsers(){
     return this.users;
   }

   addUser(user: User){
     //debugger;
     this.usersCollection.add(user);
    //console.log(user.name);
     //this.auth.signup(user.email, user.password);
    // console.log(user.name);
   }

   deleteUser(user: User){
      this.userDoc= this.afs.doc(`users/${user.id}`);
      this.userDoc.delete();
   }

   updateUser(user: User){
    this.userDoc= this.afs.doc(`users/${user.id}`);
    this.userDoc.update(user);
   }
}
