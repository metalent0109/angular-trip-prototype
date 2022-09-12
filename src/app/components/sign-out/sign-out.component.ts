import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PassengerRepository} from "../../repository/passenger.repository";
import {ValidationService} from "../../services/validation.service";
import {Auth} from "../../models/auth";

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {

  constructor(
    private router: Router,
    private passengerRepository: PassengerRepository,
    private validationService: ValidationService,
  ) {
  }


  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if(user) {
        localStorage.removeItem('user');
        this.router.navigate(['/sign-in']);
        localStorage.setItem('refresh', 'refresh');
    }
  }
}
