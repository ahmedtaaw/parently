import { TestBed, inject } from '@angular/core/testing';

import { ListUsersService } from './list-users.service';

import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { HttpClient,HttpHandler} from '@angular/common/http'; 
import { ToastrService,ToastrModule} from 'ngx-toastr';
import { HttpModule, Http} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

describe('ListUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        NgbModule.forRoot(),
        HttpModule,
        BrowserModule
      ],
      providers: [
        ListUsersService,
        LoginService,
        HttpClient,
        HttpHandler,
        ToastrService,
        Http
      ]
    });
  });

  it('should be created', inject([ListUsersService], (service: ListUsersService) => {
    expect(service).toBeTruthy();
  }));
});
