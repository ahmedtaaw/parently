import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { GetUserComponent } from './get-user.component';

import { LoginService } from '../login/login.service';
import { HttpClient,HttpHandler } from '@angular/common/http'; 
import { ToastrService,ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('GetUserComponent', () => {
  let component: GetUserComponent;
  let fixture: ComponentFixture<GetUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        NgbModule.forRoot()
      ],
      declarations: [ GetUserComponent ],
      providers:[LoginService,HttpClient,HttpHandler,ToastrService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
