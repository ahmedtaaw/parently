import { Injectable } from '@angular/core';

import {IPages,IUsers} from './list-users';

@Injectable()
export class ListUsersService {

  getuserslist():IUsers[]{
    return[{
      "id":1,
      "first_name":"ahmed",
      "last_name":"tawfik",
      "avatar":"avatarlink"
    },{
      "id":2,
      "first_name":"ahmed",
      "last_name":"tawfik",
      "avatar":"avatarlink"
    }]
  }
}
