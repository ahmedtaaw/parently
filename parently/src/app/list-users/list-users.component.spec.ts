import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsersComponent } from './list-users.component';
import { ListUsersService } from './list-users.service';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpModule, Http} from '@angular/http';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('ListUsersComponent', () => {
  let component: ListUsersComponent;
  let fixture: ComponentFixture<ListUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListUsersComponent],
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
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
