import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PasswordValidator} from './shared/password.validator';
import {ActivatedRoute, Router} from '@angular/router';
import {EnrollmentService} from "../enrollment.service";
import {AuthenticationService} from "../_services";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.css']
})
export class AuthorizationPageComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  error: 'dupa';
  loading = false;
  ngOnInit(){
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });


    this.authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  };

  get userName() {
    return this.loginForm.get('userName');
  }

  get password() {
    return this.loginForm.get('password');
  }

  constructor(private fb: FormBuilder,
              private _router: Router,
              private _service: EnrollmentService,
              private authenticationService : AuthenticationService,
              private route: ActivatedRoute,) {
  }


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
    this.loading = true;
    this.authenticationService.login(this.loginForm.get('userName').value, this.loginForm.get('password').value)
      .pipe(first())
      .subscribe(
        data=>{
            this._router.navigateByUrl('dashboard');
        },
        error => {
          this.error = error;
          this.loading = false;
        }
      );



    // this._service.sendData(this.loginForm.value)
    //   .subscribe(
    //     response => console.log(alert("You have been successfully singed up! "), response),
    //     error => console.error('Error', error)
    //   );
    // this._router.navigateByUrl('dashboard');
   // this._service.getAnswer()
   //   .subscribe(
   //     response => console.log("dane", response)
   //   );
      // .subscribe(
      //   response => console.log(this._router.navigateByUrl('dashboard'), response),
      //   error => console.error('Error', error)
      // );
  }
  signUp()
  {
    this._service.sendData(this.registrationForm.value)
      .subscribe(
        response => console.log(alert("You have been successfully singed up! "), response),
        error => console.error('Error', error)
      );
  }
}
