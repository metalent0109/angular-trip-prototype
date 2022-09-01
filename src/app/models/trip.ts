import {Type} from "./type";
import {Base} from "./base";
import {Review} from "./review";

export interface Trip extends Base {
  type: Type,
  name: string,
  description: string,
  distance: number,
  price: number,
  duration: Date,
  review: Array<Review>,
}
