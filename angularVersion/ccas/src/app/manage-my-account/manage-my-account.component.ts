import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-manage-my-account',
  templateUrl: './manage-my-account.component.html',
  styleUrls: ['./manage-my-account.component.css']
})
export class ManageMyAccountComponent implements OnInit {
  user!:User;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getOne().subscribe( data => {
      this.user = data;});
  }

}
