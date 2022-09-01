import {Repository} from "./repository";
import {Cart} from "../models/cart";
import {Injectable} from "@angular/core";

@Injectable()
export class CartRepository extends Repository<Cart> {

  protected override key: string = 'cart';
}
