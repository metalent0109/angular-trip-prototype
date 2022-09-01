import {Passenger} from "./passenger";

export interface Base {
  uid: string,
  createdAt: Date,
  createdBy: Passenger,
  updatedAt: Date,
  updatedBy: Passenger,
}
