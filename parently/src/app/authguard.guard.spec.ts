import { TestBed, async, inject } from '@angular/core/testing';
import { LoginService } from './login/login.service';
import { AuthguardGuard } from './authguard.guard';
import { HttpClient,HttpHandler} from '@angular/common/http'; 

describe('AuthguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthguardGuard,LoginService,HttpClient,HttpHandler]
    });
  });

  it('should ...', inject([AuthguardGuard], (guard: AuthguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
