import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {TripService} from "../../services/trip.service";

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

  completeTrip(): void {
    // const select = document.getElementById("rate") as HTMLSelectElement;
    // const rate = select.value;
    // const input = document.getElementById("comment") as HTMLInputElement;
    // const comment = input.value;
    // console.log((<HTMLInputElement>document.getElementById("comment")).value);
  }
}
