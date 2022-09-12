import { VisitedComponent } from './components/visited/visited.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {SignOutComponent} from "./components/sign-out/sign-out.component";
import {TripsComponent} from "./components/trips/trips.component";
import {BookedComponent} from "./components/booked/booked.component";
import {DetailsComponent} from "./components/details/details.component";

const routes: Routes = [
  {
    path: '',
    title: 'Prijava korisnika',
    component: SignInComponent
  },
  {
    path: 'sign-in',
    title: 'Prijava korisnika',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    title: 'Registracija korisnika',
    component: SignUpComponent
  },
  {
    path: 'sign-out',
    title: 'Odjava korisnika',
    component: SignOutComponent
  },
  {
    path: 'trip',
    title: 'Ponuda putovanja',
    component: TripsComponent
  },
  {
    path: 'trip/:id',
    title: 'Detalji putovanja',
    component: DetailsComponent,
  },
  {
    path: 'details/:id',
    title: 'Detalji putovanja',
    component: DetailsComponent,
  },
  {
    path: 'booked',
    title: 'Rezervacije',
    component: BookedComponent
  },
  {
    path: 'favourites',
    title: 'Omiljeni',
    component: FavouritesComponent
  },
  {
    path: 'visited',
    title: 'Visited',
    component: VisitedComponent
  },
  {
    path: 'cart',
    title: 'Korpa',
    component: TripsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
