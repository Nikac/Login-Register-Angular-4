import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  authState: any;

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  register(email: string, password: string) {
  	return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  		.then(user => {
  			this.authState = user;
  			this.router.navigate(['/']);
  		 })
  		.catch( error =>{ 
  			console.log(error);
  			throw error;
  		})
  }


  login(email: string, password: string) {
  	return this.afAuth.auth.signInWithEmailAndPassword(email, password)
  		.then(user => { 
  			this.authState = user;
  			this.router.navigate(['/home']);
  		})
  		.catch(err => {
  			console.log(err);
  			throw err;
  		})
  }


  signOut() {
  	this.afAuth.auth.signOut();
  	this.router.navigate(['/']);
  }

}
