import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardMenuComponent } from "../../../shared/components/dashboard-menu/dashboard-menu.component";
import {MatIconModule} from '@angular/material/icon';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, DashboardMenuComponent, MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  private cookieService: CookieService = inject(CookieService);

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

  constructor(){}

  logout(): void {
    this.cookieService.delete('token');
    window.location.reload();
  }
}
