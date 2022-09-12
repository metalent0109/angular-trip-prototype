import { Review } from './../models/review';
import { Visited } from './../models/visited';
import { Passenger } from './../models/passenger';
import {Repository} from "./repository";
import {Booked} from "../models/booked";
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
      this.modify(current_user);
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
      return true;
    } else {
      return false;
    }
  }

  getBooked(): Array<Booked> {
    const current_user = this.current_user();
    return current_user.booked.map((b: any) : Booked => b);
  }

  getFavourites(): Array<Trip> {
    const current_user = this.current_user();
    return current_user.favourites.map((f: any) : Trip => f);
  }

  getVisited(): Array<Trip> {
    const current_user = this.current_user();
    return current_user.visited.map((f: any) : Trip => f.trip);
  }

  cancel(booked: Booked): boolean {
    const current_user = this.current_user();
    const books: Array<Booked> = current_user.booked;
    current_user.booked = books.filter((b: Booked) => b.trip.uid !== booked.trip.uid);
    this.modify(current_user);
    return true;
  }

  done(visited: Visited): boolean {
    const current_user = this.current_user();
    current_user.visited.push(visited);
    this.modify(current_user);
    this.delete(visited.trip);
    return true;
  }

  tripRating(trip: Trip): number {
    const all = this.findAll();
    let sum = 0;
    let num = 0;
    for (let i=0; i<all.length; i++) {
      for ( let j=0; j<all[i].visited.length; j++) {
        if(all[i].visited[j].trip.uid === trip.uid) {
          sum += parseInt(all[i].visited[j].review.rate);
          num ++ ;
        }
      }
    }
    if (num) {
      return sum/num;
    } else {
      return -1;
    }
  }

  private delete(trip: Trip): void {
    const current_user = this.current_user();
    current_user.booked = current_user.booked.filter((b: Booked): boolean => b.trip.uid !== trip.uid);
    this.modify(current_user);
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
