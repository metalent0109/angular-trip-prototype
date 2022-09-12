import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'trip';
  isLoggedIn: string | null = localStorage.getItem('user');

  constructor() {
  }
}
