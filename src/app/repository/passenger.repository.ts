import {Repository} from "./repository";
import {Passenger} from "../models/passenger";
import {Booked} from "../models/booked";
import {Visited} from "../models/visited";
import {Trip} from "../models/trip";
import {Injectable} from "@angular/core";

@Injectable()
export class PassengerRepository extends Repository<Passenger> {

  protected override key: string = 'passengers';

  constructor(
    private passenger: Passenger,
  ) {
    super();
  }

  book(booked: Booked): void {
    this.passenger.booked.push(booked);
    this.modify(this.passenger);
  }

  cancel(booked: Booked): void {
    this.passenger.booked.map((b: Booked): Booked => b.trip.uid === booked.trip.uid ? booked : b);
    this.modify(this.passenger);
  }

  done(visited: Visited): void {
    this.passenger.visited.push(visited);
    this.modify(this.passenger);
  }

  remove(trip: Trip): void {
    this.passenger.booked = this.passenger.booked.filter((b: Booked) => b.uid !== trip.uid);
    this.save(this.passenger);
  }

  findByEmailAndPassword(email: string, password: string): Passenger | null {
    const passenger: Passenger | undefined = this.all().find((passenger: Passenger) =>
      passenger.email === email && passenger.password === password
    );
    return passenger === undefined ? null : passenger;
  }
}
