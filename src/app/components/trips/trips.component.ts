import {Component, OnInit} from '@angular/core';
import {TripService} from "../../services/trip.service";

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  constructor(
    public tripService: TripService,
  ) {
  }

  ngOnInit(): void {

  }
}
