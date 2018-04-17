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


import { UserService } from './user.service';

import { AuthguardGuard } from './authguard.guard';


const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'list-users',
    component: ListUsersComponent,
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
    ListUsersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [UserService,AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
