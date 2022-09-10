import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {TripsComponent} from "./components/trips/trips.component";

const routes: Routes = [
  {
    path: '',
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
    component: SignUpComponent
  },
  {
    path: 'trip',
    title: 'Ponuda putovanja',
    component: TripsComponent,
    children: [
      {
        path: ':uid',
        title: 'Detalji putovanja',
        component: TripsComponent,
      },
    ]
  },
  {
    path: 'booked',
    title: 'Rezervacije',
    component: SignUpComponent
  },
  {
    path: 'favourites',
    title: 'Omiljeni',
    component: SignUpComponent
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
