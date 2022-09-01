import {Passenger} from "./passenger";
import {Trip} from "./trip";
import {Base} from "./base";

export interface Cart extends Base {
  uid: string,
  passenger: Passenger,
  trips: Array<Trip>,
}
