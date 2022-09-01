import {Repository} from "./repository";
import {Passenger} from "../models/passenger";
import {Auth} from "../models/auth";
import {UserNotFoundException} from "../exceptions/user-not-found.exception";
import {PassengerRepository} from "./passenger.repository";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthRepository extends Repository<Passenger> {

  protected override key: string = 'users';

  constructor(
    private passengerRepository: PassengerRepository,
  ) {
    super();
  }

  authenticated(passenger: Passenger): boolean {
    return this.exists(passenger.uid);
  }

  signIn(auth: Auth): void {
    const passenger: Passenger | null = this.passengerRepository.findByEmailAndPassword(auth.email, auth.password);
    if (passenger === null) {
      throw new UserNotFoundException();
    }
    this.save(passenger);
  }

  signOut(): void {
    this.deleteAll();
  }
}
