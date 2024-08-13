import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authenticated = false;

  login(email: string, password: string): Observable<boolean> {
    if (email === 'user@demo.com' && password === '123456') {
      this.authenticated = true;
      return of(true);
    } else {
      return of(false);
    }
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  logout(): void {
    this.authenticated = false;
  }
}
