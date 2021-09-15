import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-manage-users-admin',
  templateUrl: './manage-users-admin.component.html',
  styleUrls: ['./manage-users-admin.component.css']
})
export class ManageUsersAdminComponent implements OnInit {
  users!:User[];

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getAll().subscribe( data => {
      this.users = data;
    });
  }

}
