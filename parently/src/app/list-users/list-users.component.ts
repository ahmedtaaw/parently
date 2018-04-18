import { Component, OnInit } from '@angular/core';

import {LoginService} from '../login/login.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  constructor(private login:LoginService) { }

  ngOnInit() {
  }

}
