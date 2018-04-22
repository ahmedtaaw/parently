import { Component, OnInit } from '@angular/core';

import { LoginService } from '../login/login.service';
import { ISingleuser } from './singleuser';

import {HttpClient, HttpClientModule} from '@angular/common/http'
import {Observable} from 'rxjs/Observable';

import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Conditional } from '@angular/compiler';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.scss']
})
export class GetUserComponent implements OnInit {
  singleuser:ISingleuser[];
  readonly urlgetpost='https://reqres.in/api/users/';
  errorMessage: string;
  errorhandler: boolean = false;
  errorhandlercreatingprofile: boolean = false;
  userid:number=2;

  userForm:FormGroup;

  constructor(private login: LoginService,
  private httpclient:HttpClient,
  private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm(){
    this.userForm=this.fb.group({
      userName:['',Validators.required],
      userJob: ['',Validators.required]
    });
  }

  onKeyUpUser(e) {
    this.userid=e.target.value;
  }

  getUser() {
    this.httpclient.get(this.urlgetpost+this.userid)
    .subscribe(
      (data:any[])=>{this.singleuser=data;this.errorhandler=false;},
      (error:any)=>{this.errorhandler=true;}
    );
  }

  createUser(){
    this.httpclient.post(this.urlgetpost,{
      "name":  this.userForm.value.userName,
      "job": this.userForm.value.userJob
    }).subscribe(
      (data:any)=>{console.log(data);this.errorhandlercreatingprofile=false;},
      (error:any)=>{this.errorhandlercreatingprofile=true;}
    );
  }

 
}
