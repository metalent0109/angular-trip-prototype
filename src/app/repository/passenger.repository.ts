import {Repository} from "./repository";
import {Passenger} from "../models/passenger";
import {Booked} from "../models/booked";
import {Visited} from "../models/visited";
import {Trip} from "../models/trip";
import {Injectable} from "@angular/core";

@Injectable()
export class PassengerRepository extends Repository<Passenger> {

  protected override key: string = 'passengers';

  private passenger: Passenger = <Passenger>{};

  constructor() {
    super();
  }

  cart(trip: Trip): void {
    let cart: Array<Trip> = this.passenger.cart;
    if (cart.find((t: Trip): boolean => t.uid === trip.uid) === undefined) {
      this.passenger.cart.push(trip);
      this.save(this.passenger);
    }
  }

  removeFromCart(trip: Trip): void {
    this.passenger.cart = this.passenger.cart.filter((t: Trip): boolean => t.uid !== trip.uid);
    this.save(this.passenger);
  }

  favourites(trip: Trip): void {
    let favourites: Array<Trip> = this.passenger.favourites;
    if (favourites.find((t: Trip): boolean => t.uid === trip.uid) === undefined) {
      this.passenger.favourites.push(trip);
      this.save(this.passenger);
    }
  }

  removeFromFavourites(trip: Trip): void {
    this.passenger.favourites = this.passenger.favourites.filter((t: Trip) => t.uid !== trip.uid);
    this.save(this.passenger);
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
    this.delete(visited.trip);
  }

  private delete(trip: Trip): void {
    this.passenger.booked = this.passenger.booked.filter((b: Booked): boolean => b.uid !== trip.uid);
    this.save(this.passenger);
  }
}
