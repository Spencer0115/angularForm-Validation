import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor( private fb: FormBuilder) { }

  loginForm : FormGroup = this.fb.group({
    username: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(".*[0-9].*"),
      Validators.pattern(".*[A-Z].*")

    ]),
    password_match: new FormControl('', [
      Validators.required    ])
  });

  ngOnInit() {
  }

}
