import Swal from 'sweetalert2';
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Passenger} from "../../models/passenger";
import {PassengerRepository} from "../../repository/passenger.repository";
import {v4 as uuid} from "uuid";
import {ValidationService} from "../../services/validation.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public passenger: Passenger = <Passenger>{
    uid: uuid(),
    createdAt: new Date(),
    updatedAt: new Date(),
    name: '',
    surname: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    favourites: [],
    cart: [],
    booked: [],
    visited: [],
  };

  public passengerFrom: FormGroup = new FormGroup({
    name: new FormControl(this.passenger.name, this.validationService.text(32)),
    surname: new FormControl(this.passenger.surname, this.validationService.text(32)),
    email: new FormControl(this.passenger.email, this.validationService.email()),
    password: new FormControl(this.passenger.password, this.validationService.password()),
    phone: new FormControl(this.passenger.phone, this.validationService.phone()),
    address: new FormControl(this.passenger.address, this.validationService.text(64)),
  });

  constructor(
    private formBuilder: FormBuilder,
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
    // this.passengerFrom = this.formBuilder.group(
    //   {
    //     name: ['', [Validators.required, Validators.maxLength(32)]],
    //     surname: ['', [Validators.required, Validators.maxLength(32)]],
    //     email: ['', [Validators.required, Validators.email]],
    //     password: ['', [Validators.required, Validators.minLength(8)]],
    //     phone: ['', [Validators.required, Validators.pattern(/[0-9\+\-\ ]/)]],
    //     address: ['', [Validators.required, Validators.maxLength(64)]],
    //   }
    // )
  }

  onSubmit(): void {
    if (this.passengerFrom.valid) {
      this.passenger.name = this.passengerFrom.value.name;
      this.passenger.surname = this.passengerFrom.value.surname;
      this.passenger.email = this.passengerFrom.value.email;
      this.passenger.password = this.passengerFrom.value.password;
      this.passenger.phone = this.passengerFrom.value.phone;
      this.passenger.address = this.passengerFrom.value.address;
      const isRegistered = this.passengerRepository.signup(this.passenger);
      if(isRegistered) {
        Swal.fire({
          title: 'Success',
          text: 'Successfully registered. Welcome to our website.'
        });
        this.router.navigate(['/trip']);
      } else {
        Swal.fire({
          title: 'Notice',
          text: 'Email is duplicated. Please use the other email address.'
        })
      }
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Sorry.Fill out the forms correctly!'
      })
    }
  }

  get name(): any {
    return this.passengerFrom.get('name');
  }

  get surname(): any {
    return this.passengerFrom.get('surname');
  }

  get email(): any {
    return this.passengerFrom.get('email');
  }

  get password(): any {
    return this.passengerFrom.get('password');
  }

  get phone(): any {
    return this.passengerFrom.get('phone');
  }

  get address(): any {
    return this.passengerFrom.get('address');
  }
}
