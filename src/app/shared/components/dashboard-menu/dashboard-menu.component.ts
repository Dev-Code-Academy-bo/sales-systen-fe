import { Component, Input } from '@angular/core';
import { DashboardMenuInterface } from '../../interfaces/dashboard-menu.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-menu',
  imports: [RouterModule],
  templateUrl: './dashboard-menu.component.html',
  styleUrl: './dashboard-menu.component.scss',
})
export class DashboardMenuComponent {

  @Input({required: true}) menuItems!: DashboardMenuInterface[];
}
