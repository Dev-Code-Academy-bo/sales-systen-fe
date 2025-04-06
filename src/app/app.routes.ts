import { Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { ProductComponent } from './product/components/product/product.component';
import { CreateUserComponent } from './user/components/create-user/create-user.component';
import { UsersListComponent } from './user/components/users-list/users-list.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'create-user',
        component: CreateUserComponent
      },
      {
        path: 'users-list',
        component: UsersListComponent
      }
    ]
  }
];
