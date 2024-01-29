import { Component } from '@angular/core';
import { AuthRegister } from '../../types/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.sass'
})
export class RegisterComponent {
  form: AuthRegister = {
    email: '',
    password: '',
    confirm_password: '',
  }

  constructor(private authService : AuthService) {}
  submit() {
    this.authService.register(this.form)
  }

  isLoading() {
    return this.authService.isLoading
  }
}
