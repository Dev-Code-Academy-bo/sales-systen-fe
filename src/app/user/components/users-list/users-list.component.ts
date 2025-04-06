import { Component, inject, OnInit } from '@angular/core';
import { DataListComponent } from '../../../shared/components/data-list/data-list.component';
import { UserHttpClientService } from '../../../core/services/user-http-client.service';
import { UserInterface } from '../../../core/interfaces/user.interface';
import { UserListInterface } from '../../interfaces/user-list.interface';

@Component({
  selector: 'app-users-list',
  imports: [DataListComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit {
  private userService: UserHttpClientService = inject(UserHttpClientService);

  public usersList: UserListInterface[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data: UserInterface[]) => {
      this.usersList = data.map(user => {
        return {
          name: user.name,
          email: user.address,
          phone: user.phono,
          address: user.address,
          lastname: user.lastname,
          username: user.username,
          phono: user.phono
        }
      });
    });


  }
}
