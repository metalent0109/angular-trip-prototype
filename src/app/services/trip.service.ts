import {Review} from "../models/review";
import {Trip} from "../models/trip";
import {TripRepository} from "../repository/trip.repository";
import {PassengerRepository} from "../repository/passenger.repository";
import {Booked} from "../models/booked";
import {Status} from "../models/status";
import {Visited} from "../models/visited";
import {v4 as uuid} from "uuid";
import {Injectable} from "@angular/core";

@Injectable()
export class TripService {

  constructor(
    private tripRepository: TripRepository,
    private passengerRepository: PassengerRepository,
  ) {
  }

  all(): Array<Trip> {
    return this.tripRepository.all();
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
    this.passengerRepository.done(<Visited>{
      uid: uuid(),
      createdAt: new Date(),
      updatedAt: new Date(),
      trip: booked.trip,
      review: review,
    });
    this.passengerRepository.remove(booked.trip);
  }

  rate(visited: Visited): number {
    return visited.trip.review.reduce((accumulator: number, review: Review) => accumulator + review.rate.valueOf(), 0);
  }

  reviews(trip: Trip): number {
    return trip.review.length;
  }
}
