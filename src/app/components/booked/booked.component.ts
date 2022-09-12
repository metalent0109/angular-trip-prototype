import { Booked } from './../../models/booked';
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {TripService} from "../../services/trip.service";
import {Review} from "../../models/review";


@Component({
  selector: 'app-booked',
  templateUrl: './booked.component.html',
  styleUrls: ['./booked.component.css']
})
export class BookedComponent implements OnInit {

  constructor(
    public tripService: TripService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (!user) {
      this.router.navigate(['/sign-in']);
    }
  }

  completeTrip(booked: Booked, i: number): void {
    const select = document.getElementById("rate"+i) as HTMLSelectElement;
    const rate = select.value;
    const comment = (<HTMLInputElement>document.getElementById("comment"+i)).value;
    this.tripService.done(booked, <Review>{
      note: comment,
      rate: rate
    });
  }
}
