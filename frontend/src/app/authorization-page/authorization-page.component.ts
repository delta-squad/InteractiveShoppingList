import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {PasswordValidator} from './shared/password.validator';
import {Router} from '@angular/router';
import {EnrollmentService} from "../enrollment.service";

@Component({
  selector: 'app-authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.css', '../app.component.css']
})
export class AuthorizationPageComponent implements OnInit {

  ngOnInit() {

  };

  get userName() {
    return this.loginForm.get('userName');
  }

  get password() {
    return this.loginForm.get('password');
  }

  constructor(private fb: FormBuilder, private _router: Router, private _service: EnrollmentService) {
  }

  loginForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });

  registrationForm = this.fb.group({
    newEmail: ['', Validators.required],
    newUserName: ['', [Validators.required, Validators.minLength(4)]],
    newPassword: ['', [Validators.required, Validators.minLength(8)]],
    newConfirmPassword: ['', Validators.required]
  }, {validator: PasswordValidator});

  get newUserName() {
    return this.registrationForm.get('newUserName');
  }

  get newEmail() {
    return this.registrationForm.get('newEmail');
  }

  get newPassword() {
    return this.registrationForm.get('newPassword');
  }

  get newConfirmPassword() {
    return this.registrationForm.get('newConfirmPassword');
  }

  signIn() {
    console.log(this.loginForm.value);
    this._service.sendData(this.loginForm.value)
      .subscribe(
        response => console.log(alert("You have been successfully signed up! "), response),
        error => console.error('Error', error)
      );
    if (this.loginForm.get('userName').value == 'admin' && this.loginForm.get('password').value == 'admin') {
      this._router.navigateByUrl('admin');
    } else {
      this._router.navigateByUrl('dashboard');
    }

    // this._service.getAnswer()
    //   .subscribe(
    //     response => console.log("dane", response)
    //   );
    // .subscribe(
    //   response => console.log(this._router.navigateByUrl('dashboard'), response),
    //   error => console.error('Error', error)
    // );
  }

  signUp() {
    this._service.sendData(this.registrationForm.value)
      .subscribe(
        response => console.log(alert("You have been successfully signed up! "), response),
        error => console.error('Error', error)
      );
  }
}
