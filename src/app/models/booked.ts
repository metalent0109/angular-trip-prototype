import {Trip} from "./trip";
import {Status} from "./status";
import {Base} from "./base";

export interface Booked extends Base {
  trip: Trip,
  status: Status,
}
