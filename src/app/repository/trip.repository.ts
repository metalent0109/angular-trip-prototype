import {Repository} from "./repository";
import {Trip} from "../models/trip";
import {Visited} from "../models/visited";
import {NotFoundException} from "../exceptions/not-found.exception";

export class TripRepository extends Repository<Trip> {

  protected override key: string = 'trips';

  addReview(visited: Visited): void {
    let trip: Trip | null = this.findById(visited.trip.uid);
    if (trip === null) {
      throw new NotFoundException(visited.trip.uid);
    }
    trip.review.push(visited.review);
    this.modify(trip);
  }
}
