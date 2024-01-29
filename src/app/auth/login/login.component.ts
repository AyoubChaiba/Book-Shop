import { Component } from '@angular/core';
import { AuthLogin } from '../../types/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
  form: AuthLogin = {
    email: '',
    password: ''
  }

  constructor(private authService : AuthService) {}

  submit() {
    this.authService.login(this.form);
  }

  isLoading() {
    return this.authService.isLoading
  }
}
