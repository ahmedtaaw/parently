import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;

  loginForm: FormGroup;

  constructor(
  private login:LoginService,
  private router:Router,
  private toastr: ToastrService) { }

  ngOnInit() {
    
    this.loginForm=new FormGroup({
      loginEmail:new FormControl(''),
      loginPassword:new FormControl('')
    });
  }


  loginUser({value,valid}:{value:any,valid:boolean}) {
   
     this.username = value.loginEmail;
     this.password = value.loginPassword;

     this.login.getLogin(this.username,this.password)
     .subscribe(data=>{
      if(data){
        this.toastr.success('Hello '+this.username, 'login success!')
         this.login.setUserLoggedIn();
         if(this.login.isLoggedIn()){
         this.router.navigate(['list-users']);
        }
      } 
     
    });
  }

}
