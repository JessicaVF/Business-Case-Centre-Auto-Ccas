import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-manage-my-account',
  templateUrl: './manage-my-account.component.html',
  styleUrls: ['./manage-my-account.component.css']
})
export class ManageMyAccountComponent implements OnInit {
  user!:User;
  isAdmin!:any;
  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userService.getOne().subscribe( data => {
      this.user = data;});
      this.isAdmin = this.authService.getIfAdminInStorage();
      console.log(this.isAdmin);

  }

}
