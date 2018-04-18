import { Component, OnInit } from '@angular/core';

import {LoginService} from '../login/login.service';

import {ListUsersService} from './list-users.service';
import {IPages,IUsers} from './list-users';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  pageslist:IPages[];
  userslist:IUsers[];

  constructor(private login:LoginService,
  private _listUserService:ListUsersService) { }

  ngOnInit():void {
    this.userslist = this._listUserService.getuserslist();
  }

}
