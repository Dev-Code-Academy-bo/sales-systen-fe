import { Component, inject, OnInit } from '@angular/core';
import { DataListComponent } from '../../../shared/components/data-list/data-list.component';
import { UserHttpClientService } from '../../../core/services/user-http-client.service';
import { UserInterface } from '../../../core/interfaces/user.interface';
import { UserListInterface } from '../../interfaces/user-list.interface';
import { take } from 'rxjs';

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
    this.createUserList();
  }

  deleteItem(event: string) {
    this.userService.deleteUser(event).pipe(take(1)).subscribe(()=>{
      this.createUserList();
    });
  }

  createUserList(): void {
    this.userService.getAllUsers().pipe(take(1)).subscribe((data: UserInterface[]) => {
      this.usersList = data.map(user => {
        return {
          id: user._id,
          name: user.name,
          lastname: user.lastname,
          username: user.username,
          phono: user.phono,
          birthdate: user.birthdate,
          address: user.address,
        } as UserListInterface;
      });
    });
  }
}
