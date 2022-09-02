import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Passenger} from "../../models/passenger";
import {PassengerRepository} from "../../repository/passenger.repository";
import {v4 as uuid} from "uuid";

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

  public passengerFrom: FormGroup = this.formBuilder.group(this.passenger);

  constructor(
    private formBuilder: FormBuilder,
    private passengerRepository: PassengerRepository,
  ) {
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.passengerRepository.save(this.passengerFrom.value);
  }
}
