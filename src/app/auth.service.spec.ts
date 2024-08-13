import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should authenticate user with correct credentials', (done: DoneFn) => {
    service.login('user@demo.com', '123456').subscribe(isAuthenticated => {
      expect(isAuthenticated).toBeTrue();
      expect(service.isAuthenticated()).toBeTrue();
      done();
    });
  });

  it('should not authenticate user with incorrect credentials', (done: DoneFn) => {
    service.login('user@demo.com', 'wrongpassword').subscribe(isAuthenticated => {
      expect(isAuthenticated).toBeFalse();
      expect(service.isAuthenticated()).toBeFalse();
      done();
    });
  });

  it('should log out the user', () => {
    service.login('user@demo.com', '123456').subscribe(() => {
      service.logout();
      expect(service.isAuthenticated()).toBeFalse();
    });
  });
});
