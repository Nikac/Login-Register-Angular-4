import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;	

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  login(form: NgForm) {
  	this.email = form.value.email;
  	this.password = form.value.password;
  	this.userService.login(this.email, this.password);
  }

}
