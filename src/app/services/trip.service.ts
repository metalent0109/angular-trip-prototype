import Swal from 'sweetalert2';
import {Review} from "../models/review";
import {Trip} from "../models/trip";
import {Passenger} from "../models/passenger";
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

  getTripById(uid: string | null): Trip {
    
    return this.tripRepository.getTripByUId(uid);
  }

  getBooked(): Array<Booked> {
    return this.passengerRepository.getBooked();
  }

  getfavourites(): Array<Trip> {
    return this.passengerRepository.getfavourites();
  }

  addToFavourites(trip: Trip): void {
    const isAdded = this.passengerRepository.favourites(trip);
    if (isAdded) {
      Swal.fire({
        title: 'Success',
        text: 'Successfully added to favourites!'
      })
    } else {
      Swal.fire({
        title: 'Notice',
        text: 'Already added. Please add the other trip.'
      });
    }
  }

  removeFromFavourites(trip: Trip): void {
    const isRemoved = this.passengerRepository.removeFromFavourites(trip);
    if (isRemoved) {
      window.location.reload();
    } else {
      Swal.fire({
        'title': 'Warning!',
        'text': 'Favourite removal is failed!.'
      });
    }
  }

  addToCart(trip: Trip): void {
    this.passengerRepository.cart(trip);
  }

  removeFromCart(trip: Trip): void {
    this.passengerRepository.removeFromCart(trip);
  }

  book(trip: Trip): void {
    const isBooked = this.passengerRepository.book(<Booked>{
      uid: uuid(),
      createdAt: new Date(),
      updatedAt: new Date(),
      trip: trip,
      status: Status.BOOKED,
    });
    if (isBooked) {
      Swal.fire({
        title: 'Success',
        text: 'Successfully booked!'
      });
    } else {
      Swal.fire({
        title: 'Notice',
        text: 'Already booked. Please book the other trip.'
      });
    }
  }

  cancel(booked: Booked): void {
    booked.status = Status.CANCELLED;
    const isCanceled = this.passengerRepository.cancel(booked);
    if (isCanceled) {
      // Swal.fire({
      //   'title': 'Success',
      //   'text': 'Trip is successfully canceled.'
      // });
      window.location.reload();
    } else {
      Swal.fire({
        'title': 'Warning!',
        'text': 'Trip cancel is failed!.'
      });
    }
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
