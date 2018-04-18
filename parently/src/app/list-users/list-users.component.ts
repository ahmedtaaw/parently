import { Component, OnInit } from '@angular/core';

import { LoginService } from '../login/login.service';

import { ListUsersService } from './list-users.service';
import { IPages, IUsers } from './list-users';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  pagenumber: number = 1
  pageslist: IPages[];
  userslist: IUsers[];

  errorMessage: string;

  constructor(private login: LoginService,
    private _listUserService: ListUsersService) { }

  ngOnInit(): void {
    //this.userslist = this._listUserService.getuserslist();
    this.getpage();
  }

  getpage() {
    this._listUserService.getuserslist(
      this.pagenumber)
      .subscribe(
        pagelist => this.pageslist = pagelist,
        error => this.errorMessage = <any>error,
        () => this.gotthepagedetails(this.pageslist));
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
