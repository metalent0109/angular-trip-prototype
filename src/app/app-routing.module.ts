import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {TripsComponent} from "./components/trips/trips.component";

const routes: Routes = [
  {
    path: '',
    title: 'Prijava',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    title: 'Registracija',
    component: SignUpComponent
  },
  {
    path: 'sign-out',
    title: 'Odjava',
    component: SignUpComponent
  },
  {
    path: 'trips',
    title: 'Putovanja',
    component: TripsComponent,
    children: [
      {
        path: 'favourites',
        title: 'Potencijalna',
        component: TripsComponent,
      },
      {
        path: 'booked',
        title: 'Predstojeća',
        component: TripsComponent,
      },
      {
        path: 'visited',
        title: 'Istorija',
        component: TripsComponent,
      },
    ]
  },
  {
    path: 'trip/:uid',
    title: 'Detalji putovanja',
    component: TripsComponent,
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
