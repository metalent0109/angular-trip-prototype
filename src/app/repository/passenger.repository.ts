import {Repository} from "./repository";
import {Passenger} from "../models/passenger";
import {Booked} from "../models/booked";
import {Visited} from "../models/visited";

export class PassengerRepository extends Repository<Passenger> {

  protected override key: string = 'passengers';

  constructor(
    private passenger: Passenger,
  ) {
    super();
  }

  bookTrip(booked: Booked): void {
    this.passenger.booked.push(booked);
    this.modify(this.passenger);
  }

  cancelTrip(booked: Booked): void {
    this.passenger.booked.map((b: Booked): Booked => b.trip.uid === booked.trip.uid ? booked : b);
    this.modify(this.passenger);
  }

  tripDone(visited: Visited): void {
    this.passenger.visited.push(visited);
    this.modify(this.passenger);
  }
}
