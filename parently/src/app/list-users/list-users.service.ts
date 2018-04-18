import { Injectable } from '@angular/core';

import {IPages,IUsers} from './list-users';

import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class ListUsersService {
  pagenumber:number;
  private _list_users_URL='https://reqres.in/api/users?page=';

  constructor(private _http:Http){}

  /*getuserslist():IUsers[]{
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
  }*/
  getuserslist(pagenumber):Observable<IPages[]>{
    return this._http.get(this._list_users_URL+pagenumber)
    .map((response:Response) => <IPages[]> response.json())
    .do(data => console.log('All: '+JSON.stringify(data)))
    .catch(this.handleError);
  }

  private handleError(error:Response){
    console.log(error);
      return Observable.throw(error.json().error || 'server error');
  }

}
