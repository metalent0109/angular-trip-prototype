import {Injectable} from "@angular/core";
import {CartRepository} from "../repository/cart.repository";
import {Cart} from "../models/cart";

@Injectable()
export class CartService {

  constructor(
    private cartRepository: CartRepository,
  ) {
  }

  add(cart: Cart): void {
    this.cartRepository.save(cart);
  }

  all(): Array<Cart> {
    return this.cartRepository.all();
  }

  remove(cart: Cart): void {
    this.cartRepository.delete(cart);
  }

  empty(): void {
    this.cartRepository.deleteAll();
  }
}
