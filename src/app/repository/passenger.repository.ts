import { Passenger } from './../models/passenger';
import {Repository} from "./repository";
import {Booked} from "../models/booked";
import {Visited} from "../models/visited";
import {Trip} from "../models/trip";
import {Injectable} from "@angular/core";
import { isNgTemplate } from "@angular/compiler";
import { JsonPipe } from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class PassengerRepository extends Repository<Passenger> {

  public passenger: Passenger = <Passenger>{};

  protected override key: string = 'passengers';

  constructor() {
    super();
  }

  current_user(): Passenger {
    const email = localStorage.getItem('user');
    const current_user = this.findAll().find(item => item.email === email);
    return <Passenger>(current_user);
  }
  
  cart(trip: Trip): void {
    this.passenger.cart = this.passenger.cart === undefined ? [] : this.passenger.cart;
    const cart: Array<Trip> = this.passenger.cart;
    if (cart.find((t: Trip): boolean => t.uid === trip.uid) === undefined) {
      this.passenger.cart.push(trip);
      this.save(this.passenger);
      console.log("passenger:", this.passenger);
    } 
  }

  removeFromCart(trip: Trip): void {
    this.passenger.cart = this.passenger.cart.filter((t: Trip): boolean => t.uid !== trip.uid);
    this.save(this.passenger);
  }

  favourites(trip: Trip): boolean {
    const current_user = this.current_user();
    const favourites: Array<Trip> = current_user.favourites;
    if (favourites.find((t: Trip): boolean => t.uid === trip.uid) === undefined) {
      current_user.favourites.push(trip);
      const result = this.modify(current_user);
      console.log("result:", result);
      return true;
    } else {
      return false;
    }
  }

  removeFromFavourites(trip: Trip): boolean {
    const current_user = this.current_user();
    const favourites : Array<Trip> = current_user.favourites;
    current_user.favourites = favourites.filter((f: Trip) => f.uid !== trip.uid);
    this.modify(current_user);
    return true;
  }

  book(booked: Booked): boolean {
    const current_user = this.current_user();
    const books: Array<Booked> = current_user.booked;
    if (books.find((t: Booked): boolean => t.trip.uid === booked.trip.uid) === undefined) {
      current_user.booked.push(booked);
      this.modify(current_user);
      console.log(current_user);
      return true;
    } else {
      return false;
    }
  }

  getBooked(): Array<Booked> {
    const current_user = this.current_user();
    return current_user.booked.map((b: any) : Booked => b);
  }

  getfavourites(): Array<Trip> {
    const current_user = this.current_user();
    return current_user.favourites.map((f: any) : Trip => f);
  }

  cancel(booked: Booked): boolean {
    const current_user = this.current_user();
    const books: Array<Booked> = current_user.booked;
    current_user.booked = books.filter((b: Booked) => b.trip.uid !== booked.trip.uid);
    this.modify(current_user);
    return true;
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
  
  signup(passenger: Passenger): boolean {
    if (this.findAll().find(item => item.email === passenger.email) === undefined) {
      localStorage.setItem('user', passenger.email);
      this.save(passenger);
      return true;
    } else {
      return false;
    } 
  }

  signin(email: string, password: string): string {
    if (this.findAll().find(item => item.email === email)) {
      if (this.findAll().find(item => item.email === email && item.password === password)) {
        localStorage.setItem('user', email);
        return 'login_success';
      } else {
        return 'login_fail';
      }
    } else {
      return 'no register';
    }
  }
}
