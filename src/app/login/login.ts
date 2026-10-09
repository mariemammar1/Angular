import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth-service';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email: string = '';
  password: string = '';
  hidePassword: boolean = true;
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private AS: AuthService, private router: Router) {}

  login() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Please provide both email and password.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.AS.signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.isLoading = false;
        console.log('User logged in successfully');
        this.router.navigate(['/member']);
      })
      .catch((error: any) => {
        this.isLoading = false;
        console.error('Login error:', error);
        if (
          error?.code === 'auth/invalid-credential' ||
          error?.code === 'auth/wrong-password' ||
          error?.code === 'auth/user-not-found'
        ) {
          this.errorMessage = 'Invalid email or password.';
        } else if (error?.code === 'auth/invalid-email') {
          this.errorMessage = 'Invalid email address.';
        } else if (error?.code === 'auth/too-many-requests') {
          this.errorMessage = 'Too many failed attempts. Please try again later.';
        } else {
          this.errorMessage = error?.message || 'Login failed. Please verify your credentials.';
        }
      });
  }
}
