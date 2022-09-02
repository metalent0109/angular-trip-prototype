import {Repository} from "./repository";
import {Trip} from "../models/trip";
import {Visited} from "../models/visited";
import {Injectable} from "@angular/core";
import tripsFromFile from '../../storage/trips.json';

@Injectable()
export class TripRepository extends Repository<Trip> {

  protected override key: string = 'trips';

  override findAll(): Array<Trip> {
    let e: string | null = this.getFromLocalStorage();
    return e === null ? tripsFromFile.map((t: any) => <Trip>t) : JSON.parse(e);
  }

  review(visited: Visited): void {
    this.modify(visited.trip);
  }
}
