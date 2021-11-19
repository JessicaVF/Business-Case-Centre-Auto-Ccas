import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthService } from '../auth.service';
import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-manage-users-admin',
  templateUrl: './manage-users-admin.component.html',
  styleUrls: ['./manage-users-admin.component.css']
})
export class ManageUsersAdminComponent implements OnInit {
  users!:User[];
  p: number = 1;

  constructor(private adminService:AdminService, private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.adminService.getAll().subscribe( data => {
      this.users = data;
    });
    this.checkIfAdmin();
  }
  checkIfAdmin() {
    if(this.authService.getIfAdminInStorage() != "true"){
      this.route.navigate(['login']);
    }
  }
}
