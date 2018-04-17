import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { GetUserComponent } from './get-user/get-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { LoginComponent } from './login/login.component';


const appRoutes:Routes=[
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'list-users',
    component:ListUsersComponent
  },
  {
    path:'get-user',
    component:GetUserComponent
  },
  {
    path:'create-user',
    component:CreateUserComponent
  },
  {
    path:'delete-user',
    component:DeleteUserComponent
  },
  {
    path:'update-user',
    component:UpdateUserComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    CreateUserComponent,
    GetUserComponent,
    ListUsersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
