import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  register(form: NgForm) {
  	this.email = form.value.email;
  	this.password = form.value.password;
  	this.userService.register(this.email, this.password);
  }

}
