import {Component, OnInit} from '@angular/core';
import {TripService} from "../../services/trip.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  uid = this.actRoute.snapshot.paramMap.get('id');
  constructor(
    public tripService: TripService,
    private actRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {

  }
}
