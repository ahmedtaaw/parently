import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http'; 



interface myData{
  success:boolean,
  message:string
}

@Injectable()

export class LoginService {

  constructor(
    private httpclient:HttpClient) {
    this.isUserLoggedIn=false;
   }

  private isUserLoggedIn;
  private username;

  setUserLoggedIn(){
    this.isUserLoggedIn=true;
  }  

  isLoggedIn(){
    return this.isUserLoggedIn;
  }

  getLogin(username, password){
    return this.httpclient.post<myData>('https://reqres.in/api/login',{
      username,
      password
    })
  }
  


}
