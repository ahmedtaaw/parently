import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  constructor(
  private login:LoginService,
  private router:Router) { }

  ngOnInit() {
  }

  loginUser(e) {
    e.preventDefault();
     this.username = e.target.elements[0].value;
     this.password = e.target.elements[1].value;

     this.user.getLogin(this.username,this.password)
     .subscribe(data=>{
      if(data){
         this.user.setUserLoggedIn();
         if(this.user.isLoggedIn()){
         this.router.navigate(['list-users']);
        }
      }
     
    });
  }

}
