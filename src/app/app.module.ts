import { DetailsComponent } from './components/details/details.component';
import { Visited } from './models/visited';
import { VisitedComponent } from './components/visited/visited.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {TripsComponent} from "./components/trips/trips.component";
import {BookedComponent} from "./components/booked/booked.component";
import {FavouritesComponent} from "./components/favourites/favourites.component";

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    TripsComponent,
    DetailsComponent,
    BookedComponent,
    FavouritesComponent,
    VisitedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    FormBuilder,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
