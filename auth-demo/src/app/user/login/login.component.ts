import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLoginForm: FormGroup;

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.userLoginForm = new FormGroup({
      'username': new FormControl('', [
        Validators.required,
        Validators.maxLength(50)
      ]),
      'password': new FormControl('', [
        Validators.minLength(8),
        Validators.required,
        Validators.maxLength(64),
        this.containsNoSpaceValidator
      ])
    });


  }

  onSubmit (): void {
    this.authService.loginUser(this.userLoginForm.value.username, this.userLoginForm.value.password);
    this.router.navigate(['/']);
  }


  containsNoSpaceValidator (control: FormControl): {[s: string]: boolean} {
    const controlValue = (<string>control.value);
    if (!controlValue) {
      return null;
    }
    if (controlValue.trim().length > 0) {
      return null;
    }
    return {containsNoSpaceValidator: true};
  }

}