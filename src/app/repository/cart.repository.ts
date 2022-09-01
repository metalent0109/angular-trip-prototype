import {Repository} from "./repository";
import {Cart} from "../models/cart";
import {Injectable} from "@angular/core";
import {Trip} from "../models/trip";
import {v4 as uuid} from "uuid"
import {NotFoundException} from "../exceptions/not-found.exception";

@Injectable()
export class CartRepository extends Repository<Cart> {

  protected override key: string = 'cart';

  addToCart(trip: Trip): void {
    let cart: Cart | null = this.one();
    if (cart === null) {
      cart = <Cart>{uid: uuid(), createdAt: new Date(), updatedAt: new Date(), trips: []};
    }
    cart.trips.push(trip);
    this.replaceOne(cart);
  }

  removeFromCart(trip: Trip): void {
    let cart: Cart | null = this.one();
    if (cart === null) {
      throw new NotFoundException();
    }
    cart.trips = cart.trips.filter((t: Trip) => t.uid === trip.uid);
    this.replaceOne(cart);
  }

  emptyCart(): void {
    this.deleteAll();
  }
}
