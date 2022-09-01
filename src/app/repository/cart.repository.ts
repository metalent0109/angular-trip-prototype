import {Repository} from "./repository";
import {Cart} from "../models/cart";

export class CartRepository extends Repository<Cart> {

  protected override key: string = 'cart';
}
