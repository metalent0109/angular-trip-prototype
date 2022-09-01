import {Trip} from "./trip";
import {Booked} from "./booked";
import {Visited} from "./visited";
import {Base} from "./base";

export interface Passenger extends Base {
  name: string,
  surname: string,
  email: string,
  password: string,
  phone: string,
  address: string,
  favourites: Array<Trip>,
  booked: Array<Booked>,
  visited: Array<Visited>,
}
