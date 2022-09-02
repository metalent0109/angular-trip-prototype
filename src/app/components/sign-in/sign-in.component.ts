import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Auth} from "../../models/auth";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public auth = <Auth>{email: '', password: ''}

  public authFrom = this.formBuilder.group(this.auth);

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    console.log(this.authFrom.value);
  }
}
