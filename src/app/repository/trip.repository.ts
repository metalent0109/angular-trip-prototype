import {Repository} from "./repository";
import {Trip} from "../models/trip";
import {Visited} from "../models/visited";
import {Injectable} from "@angular/core";
import tripsFromFile from '../../storage/trips.json';

@Injectable({
  providedIn: 'root'
})
export class TripRepository extends Repository<Trip> {

  protected override key: string = 'trips';

  override findAll(): Array<Trip> {
    let e: string | null = this.getFromLocalStorage();
    return e === null ? tripsFromFile.map((t: any) => <Trip>t) : JSON.parse(e);
  }

  getTripByUId(uid: string | null): Trip {
    let e: string | null = this.getFromLocalStorage();
    return tripsFromFile.map((t: any) => <Trip>t).filter((t: Trip) => t.uid === uid)[0];
    
  }

  review(visited: Visited): void {
    this.modify(visited.trip);
  }
}
