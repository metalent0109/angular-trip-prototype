import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Auth} from "../../models/auth";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  auth: Auth = <Auth>{email: '', password: ''};
  authFrom: FormGroup = new FormGroup({
    email: new FormControl(this.auth.email, [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl(this.auth.password, [
      Validators.required
    ]),
  });

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.authFrom.valid) {
      console.log(this.authFrom.value);
    }
  }

  get email() {
    return this.authFrom.get('email');
  }

  get password(): any {
    return this.authFrom.get('password');
  }
}
