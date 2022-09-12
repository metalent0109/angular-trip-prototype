import Swal from 'sweetalert2';
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PassengerRepository} from "../../repository/passenger.repository";
import {ValidationService} from "../../services/validation.service";
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

  constructor(
    private router: Router,
    private passengerRepository: PassengerRepository,
    private validationService: ValidationService,
  ) {
  }


  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (user) {
      this.router.navigate(['/trip']);
    }
    if(localStorage.getItem('refresh')) {
      window.location.reload();
      localStorage.removeItem('refresh');
    }
  }

  onSubmit(): void {
    if (this.authFrom.valid) {
      const loginData = this.authFrom.value;
      const loginResult = this.passengerRepository.signin(loginData.email, loginData.password);
      if (loginResult == 'login_success') {
        localStorage.setItem('refresh', 'refresh');
        this.router.navigate(['/trip']);
      } else if (loginResult == 'login_fail') {
        Swal.fire({
          title: 'Warning!',
          text: 'Password is incorrect.Please type the correct password.'
        });
      } else {
        Swal.fire({
          title: 'Warning!',
          text: 'No registered user! Please register first.'
        });
      }
    }
  }

  get email() {
    return this.authFrom.get('email');
  }

  get password(): any {
    return this.authFrom.get('password');
  }
}
