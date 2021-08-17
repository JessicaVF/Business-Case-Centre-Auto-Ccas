import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-manage-users-admin',
  templateUrl: './manage-users-admin.component.html',
  styleUrls: ['./manage-users-admin.component.css']
})
export class ManageUsersAdminComponent implements OnInit {
  users!:User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe( data => {
      this.users = data;
    });
  }

}
