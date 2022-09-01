import {Repository} from "./repository";
import {Trip} from "../models/trip";
import {Visited} from "../models/visited";
import {NotFoundException} from "../exceptions/not-found.exception";
import {Injectable} from "@angular/core";

@Injectable()
export class TripRepository extends Repository<Trip> {

  protected override key: string = 'trips';

  review(visited: Visited): void {
    let trip: Trip | null = this.find(visited.trip.uid);
    if (trip === null) {
      throw new NotFoundException(visited.trip.uid);
    }
    trip.review.push(visited.review);
    this.modify(trip);
  }
}
