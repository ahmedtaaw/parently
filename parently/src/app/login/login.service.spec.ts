import { TestBed, inject } from '@angular/core/testing';

import { LoginService } from './login.service';

import { ToastrService,ToastrModule} from 'ngx-toastr';
import { HttpClient,HttpHandler} from '@angular/common/http'; 

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService,
        HttpClient,
        HttpHandler,ToastrService]
    });
  });

  it('should be created', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));
});
