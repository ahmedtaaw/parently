import { Component, OnInit } from '@angular/core';

import {UserService} from '../user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  constructor(private user:UserService) { }

  ngOnInit() {
  }

}
