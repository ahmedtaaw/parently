import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { GetUserComponent } from './get-user/get-user.component';
//import { ListUsersComponent } from './list-users/list-users.component';
import { LoginComponent } from './login/login.component';
import { UsersListComponent } from './users-list/users-list.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule,Http, ConnectionBackend,RequestOptions } from '@angular/http';

import { LoginService } from './login/login.service';
//import { ListUsersService } from './list-users/list-users.service';


import { AuthguardGuard } from './authguard.guard';



const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'list-users',
    component: UsersListComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: 'get-user',
    component: GetUserComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: 'create-user',
    component: CreateUserComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: 'delete-user',
    component: DeleteUserComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: 'update-user',
    component: UpdateUserComponent,
    canActivate: [AuthguardGuard]
  }
]


@NgModule({
  declarations: [
    AppComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    CreateUserComponent,
    GetUserComponent,
    LoginComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbModule.forRoot()
    
  ],
  providers: [
    LoginService,
    AuthguardGuard,
    Http
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
