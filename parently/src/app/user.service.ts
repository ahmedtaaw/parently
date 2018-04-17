import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() {
    this.isUserLoggedIn=false;
   }

  private isUserLoggedIn;
  private username;

  setUserLoggedIn(){
    this.isUserLoggedIn=true;
  }  


  getLoggedInUser(){
    return this.isUserLoggedIn;
  }



}
