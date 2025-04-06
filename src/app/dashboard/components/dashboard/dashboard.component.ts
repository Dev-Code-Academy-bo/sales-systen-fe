import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardMenuComponent } from "../../../shared/components/dashboard-menu/dashboard-menu.component";

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, DashboardMenuComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  public menuItems = [
    {
    title: 'User',
    route: '/dashboard/users-list',
    subtitle: [
      {
        title: 'User list',
        route: '/dashboard/users-list'
      }, {
        title: 'Create user',
        route: '/dashboard/create-user'
      }]
  },
  ]
}
