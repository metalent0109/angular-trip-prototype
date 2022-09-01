import {Rate} from "./rate";
import {Base} from "./base";
import {Passenger} from "./passenger";

export interface Review extends Base {
  passenger: Passenger,
  note: string | null,
  rate: Rate,
}
