// import {Rate} from "./rate";
import {Base} from "./base";
import {Passenger} from "./passenger";

export interface Review extends Base {
  note: string | null,
  rate: string,
}
