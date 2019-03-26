import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from './shared/password.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.css']
})
export class AuthorizationPageComponent implements OnInit {
  ngOnInit;
  get userName()
  {
    return this.loginForm.get('userName');
  }
  get password()
  {
    return this.loginForm.get('password');
  }
  constructor(private fb : FormBuilder, private _router: Router){}
  loginForm = this.fb.group({
    userName: ['', Validators.required],
    password : ['', Validators.required]
  });

  registrationForm = this.fb.group({
    newEmail : ['', Validators.required],
    newUserName : ['', [Validators.required, Validators.minLength(4)]],
    newPassword : ['', [Validators.required, Validators.minLength(8)]],
    newConfirmPassword : ['', Validators.required]
  }, {validator: PasswordValidator});
  get newUserName()
  {
    return this.registrationForm.get('newUserName');
  }
  get newEmail()
  {
    return this.registrationForm.get('newEmail');
  }
  get newPassword()
  {
    return this.registrationForm.get('newPassword');
  }
  get newConfirmPassword()
  {
    return this.registrationForm.get('newConfirmPassword');
  }

  onSubmit()
  {
    if(this.loginForm.get('userName').value === "admin" && this.loginForm.get('password').value === "admin" )
    {
      alert("Zalogowano do panelu admina");
      console.log(this.loginForm);
      this._router.navigateByUrl('dashboard')
    }
    else{ alert ("No tego jest nie zrobiłem XD");}
  }
}
