import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Passenger} from "../../models/passenger";
import {PassengerRepository} from "../../repository/passenger.repository";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public passenger: Passenger = <Passenger>{};
  public passengerFromGroup: FormGroup = this.formBuilder.group(this.passenger);

  constructor(
    private formBuilder: FormBuilder,
    private passengerRepository: PassengerRepository,
  ) {
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.passengerRepository.save(this.passengerFromGroup.value);
  }
}
