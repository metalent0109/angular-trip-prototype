import {Review} from "../models/review";
import {Trip} from "../models/trip";
import {TripRepository} from "../repository/trip.repository";
import {PassengerRepository} from "../repository/passenger.repository";
import {Booked} from "../models/booked";
import {Status} from "../models/status";
import {Visited} from "../models/visited";
import {v4 as uuid} from "uuid";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(
    private tripRepository: TripRepository,
    private passengerRepository: PassengerRepository,
  ) {
  }

  all(): Array<Trip> {
    return this.tripRepository.findAll();
  }

  addToFavourites(trip: Trip): void {
    this.passengerRepository.favourites(trip);
  }

  removeFromFavourites(trip: Trip): void {
    this.passengerRepository.removeFromFavourites(trip);
  }

  addToCart(trip: Trip): void {
    this.passengerRepository.cart(trip);
  }

  removeFromCart(trip: Trip): void {
    this.passengerRepository.removeFromCart(trip);
  }

  book(trip: Trip): void {
    this.passengerRepository.book(<Booked>{
      uid: uuid(),
      createdAt: new Date(),
      updatedAt: new Date(),
      trip: trip,
      status: Status.BOOKED,
    });
  }

  cancel(booked: Booked): void {
    booked.status = Status.CANCELLED;
    this.passengerRepository.cancel(booked);
  }

  done(booked: Booked, review: Review): void {
    const visited = <Visited>{
      uid: uuid(),
      createdAt: new Date(),
      updatedAt: new Date(),
      trip: booked.trip,
      review: review,
    };
    this.passengerRepository.done(visited);
    this.tripRepository.review(visited);
  }

  tripRating(trip: Trip): number {
    return trip.review.reduce((accumulator: number, review: Review) => accumulator + review.rate.valueOf(), 0);
  }

  tripNumberOfReviews(trip: Trip): number {
    return trip.review.length;
  }
}
