import { Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { DashboardComponent } from './auth/components/dashboard/dashboard.component';
import { UserComponent } from './user/components/user/user.component';
import { ProductComponent } from './product/components/product/product.component';

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
        path: 'user',
        component: UserComponent
      },
      {
        path: 'product',
        component: ProductComponent
      }
    ]
  }
];
