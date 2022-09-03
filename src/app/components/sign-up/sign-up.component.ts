import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
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
    private passengerRepository: PassengerRepository,
    private validationService: ValidationService,
  ) {
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.passengerFrom.valid) {
      this.passengerRepository.save(this.passengerFrom.value);
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
