import {Trip} from "./trip";
import {Review} from "./review";
import {Base} from "./base";

export interface Visited extends Base {
  trip: Trip,
  review: Review,
}
