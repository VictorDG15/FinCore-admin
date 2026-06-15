import { Component, OnInit } from '@angular/core';
import { InternalUser } from '../../../../core/models/user.model';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  loading = true;
  users: InternalUser[] = [];
  formVisible = false;
  selectedUser: InternalUser | null = null;
  searchTerm = '';

  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      this.loading = false;
    });
  }

  get filteredUsers(): InternalUser[] {
    if (!this.searchTerm) {
      return this.users;
    }

    return this.users.filter((user) => [user.fullName, user.email, user.role, user.department].join(' ').toLowerCase().includes(this.searchTerm));
  }

  createUser(): void {
    this.selectedUser = null;
    this.formVisible = true;
  }

  editUser(user: InternalUser): void {
    this.selectedUser = user;
    this.formVisible = true;
  }

  closeForm(): void {
    this.formVisible = false;
    this.selectedUser = null;
  }
}
