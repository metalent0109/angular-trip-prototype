import {Passenger} from "./passenger";
import {Trip} from "./trip";
import {Base} from "./base";

export interface Cart extends Base {
  passenger: Passenger,
  trip: Trip,
}
