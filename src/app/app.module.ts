import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {TripsComponent} from "./components/trips/trips.component";
import {PassengerRepository} from "./repository/passenger.repository";
import {TripRepository} from "./repository/trip.repository";
import {TripService} from "./services/trip.service";

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    TripsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    FormBuilder,
    PassengerRepository,
    TripRepository,
    TripService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
