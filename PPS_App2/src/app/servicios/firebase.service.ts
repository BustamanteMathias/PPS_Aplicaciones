import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private AFauth : AngularFireAuth) { }

  ServiceLogin(email:string, password:string){

    return new Promise((resolve, rejected) =>{
      this.AFauth.signInWithEmailAndPassword(email, password).then(user => { 
        resolve(user);
    }).catch(err => rejected(err));
    });
  }
}
