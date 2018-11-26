import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { FormsModule }   from '@angular/forms';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '', 
    component: LoginComponent 
  },
  {
    path: 'dashboard/users', 
    component: UsersComponent 
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'create/user',
    component: CreateuserComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
