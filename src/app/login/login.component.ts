import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Asegúrate de incluir ReactiveFormsModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      // Simulate login logic
      setTimeout(() => {
        this.isLoading = false;
        // Handle login logic here
      }, 2000);
    } else {
      this.errorMessage = 'Please fill in all required fields';
    }
  }
}
