import {Trip} from "./trip";
import {Base} from "./base";

export interface Cart extends Base {
  trips: Array<Trip>,
}
