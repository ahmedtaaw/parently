import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { ToastrService,ToastrModule} from 'ngx-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {LoginService} from './login.service';
import { HttpClient,HttpHandler} from '@angular/common/http'; 
import { RouterTestingModule } from '@angular/router/testing'
import { RouterModule, Routes } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        NgbModule.forRoot(),
        RouterModule,
        RouterTestingModule
      ],
      declarations: [ LoginComponent ],
      providers:[LoginService,HttpClient,HttpHandler,ToastrService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
