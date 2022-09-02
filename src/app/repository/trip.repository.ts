import {Repository} from "./repository";
import {Trip} from "../models/trip";
import {Visited} from "../models/visited";
import {Injectable} from "@angular/core";
import tripsFromFile from '../../storage/trips.json';

@Injectable()
export class TripRepository extends Repository<Trip> {

  protected override key: string = 'trips';

  fromFile(): Array<Trip> {
    return tripsFromFile.map((t: any) => <Trip>t);
  }

  review(visited: Visited): void {
    this.modify(visited.trip);
  }
}
