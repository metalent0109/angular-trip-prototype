import {Repository} from "./repository";
import {Trip} from "../models/trip";
import {Visited} from "../models/visited";
import {Injectable} from "@angular/core";

@Injectable()
export class TripRepository extends Repository<Trip> {

  protected override key: string = 'trips';

  review(visited: Visited): void {
    this.modify(visited.trip);
  }
}
