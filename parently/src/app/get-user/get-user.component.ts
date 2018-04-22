import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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

  disablecreatebtn:boolean=true;

  userForm:FormGroup;

  constructor(private login: LoginService,
  private httpclient:HttpClient,
  private fb:FormBuilder,
  private toastr: ToastrService,
  private modalService: NgbModal
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
      (data:any[])=>{
        this.singleuser=data;
        this.errorhandler=false;
        this.disablecreatebtn=false;
      },
      (error:any)=>{
        this.errorhandler=true;
        this.toastr.error('Your search not found!');
        this.disablecreatebtn=true;}
    );
  }

  createUser(){
    this.httpclient.post(this.urlgetpost,{
      "name":  this.userForm.value.userName,
      "job": this.userForm.value.userJob
    }).subscribe(
      (data:any)=>{this.errorhandlercreatingprofile=false;this.toastr.success('User '+this.userForm.value.userName, 'successfully created !')},
      (error:any)=>{this.errorhandlercreatingprofile=true;this.toastr.error('Error Creating User')}
    );
  }

  closeResult: string;
  open(updateuser) {
    this.modalService.open(updateuser).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
 
}
