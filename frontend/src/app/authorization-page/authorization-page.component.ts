import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {PasswordValidator} from './shared/password.validator';
import {ActivatedRoute, Router} from '@angular/router';
import {EnrollmentService} from "../enrollment.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.css', '../app.component.css']
})
export class AuthorizationPageComponent implements OnInit {

  ngOnInit() {
    sessionStorage.setItem('token', ''); // co to do chu
  };

  get userName() {
    return this.loginForm.get('userName');
  }

  get password() {
    return this.loginForm.get('password');
  }

  constructor(private fb: FormBuilder,private route: ActivatedRoute, private router: Router,private http: HttpClient, private service: EnrollmentService) {
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
  login() {
    let url = 'http://localhost:8082/login';
    let result = this.http.post<Observable<boolean>>(url, {
      name: this.loginForm.get('userName').value,
      pass: this.loginForm.get('password').value
    }).subscribe(isValid => {
      if (isValid) {
        sessionStorage.setItem(
          'token',
          btoa(this.loginForm.get('userName').value + ':' + this.loginForm.get('password').value)
        );
        this.router.navigateByUrl('dashboard');
      } else {
        alert("Authentication failed")
      }

    });
  }
  register() {
    let url = 'http://localhost:8082/login';
    let result = this.http.post<Observable<boolean>>(url, {
      newEmailToSend: this.registrationForm.get('newEmail').value,
      newNameToSend: this.registrationForm.get('newUserName').value,
      newPasswordToSend: this.registrationForm.get('newPassword').value
    }).subscribe();
  }

  signIn() {
    console.log(this.loginForm.value);
    this.service.sendData(this.loginForm.value)
      .subscribe(
        response => console.log(alert("You have been successfully signed up! "), response),
        error => console.error('Error', error)
      );
    if (this.loginForm.get('userName').value == 'admin' && this.loginForm.get('password').value == 'admin') {
      this.router.navigateByUrl('admin');
    } else {
      this.router.navigateByUrl('dashboard');
    }

    // this.service.getAnswer()
    //   .subscribe(
    //     response => console.log("dane", response)
    //   );
    // .subscribe(
    //   response => console.log(this.router.navigateByUrl('dashboard'), response),
    //   error => console.error('Error', error)
    // );
  }

  signUp() {
    this.service.sendData(this.registrationForm.value)
      .subscribe(
        response => console.log(alert("You have been successfully signed up! "), response),
        error => console.error('Error', error)
      );
  }
}
