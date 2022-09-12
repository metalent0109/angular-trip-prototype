import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {TripService} from "../../services/trip.service";

@Component({
  selector: 'app-booked',
  templateUrl: './visited.component.html',
  styleUrls: ['./visited.component.css']
})
export class VisitedComponent implements OnInit {

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
}
