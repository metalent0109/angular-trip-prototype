import {Auth} from "../models/auth";
import {Passenger} from "../models/passenger";
import {AuthRepository} from "../repository/auth.repository";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {

  constructor(
    private authRepository: AuthRepository,
  ) {
  }

  authenticated(passenger: Passenger): boolean {
    return this.authRepository.authenticated(passenger);
  }

  signIn(auth: Auth): void {
    this.authRepository.signIn(auth);
  }

  signOut(): void {
    this.authRepository.signOut();
  }
}
