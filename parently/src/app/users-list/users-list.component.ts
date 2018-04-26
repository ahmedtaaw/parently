import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../login/login.service';

import {HttpClient, HttpClientModule} from '@angular/common/http'
import {Observable} from 'rxjs/Observable';



//import { ListUsersService } from '../list-users/list-users.service';
import { IPages, IUsers } from './list-users';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  private _list_users_URL='https://reqres.in/api/users?page=';
  pagenumber: number = 1
  pageslist: IPages[];
  userslist: IUsers[];

  errorMessage: string;

  constructor(private login: LoginService,  private httpclient:HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {
    //this.userslist = this._listUserService.getuserslist();
    this.getpage();
  }
  getpage() {
    this.httpclient.get(this._list_users_URL+this.pagenumber)
      .subscribe(
        (data:any[])=>{
          this.pageslist = data
        },
        (error:any)=>{
          this.toastr.error('Error Getting the data!');
        },
        ()=>{
          this.gotthepagedetails(this.pageslist);
        }
      );
  }

  gotthepagedetails(dataObj) {
    this.userslist = dataObj.data;
  }

  setPage(setpageNumber, e) {
    e.preventDefault();
    console.log(setpageNumber);
    this.pagenumber = setpageNumber;
    this.getpage();
  }
}
