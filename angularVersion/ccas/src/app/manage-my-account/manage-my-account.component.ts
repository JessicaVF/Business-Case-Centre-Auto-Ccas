import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private userService: UserService, private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.userService.getOne().subscribe( data => {
      this.user = data;});
    this.isAdmin = this.authService.getIfAdminInStorage();
    this.checkIfLogin();
  }
  checkIfLogin(){
    if(this.authService.getIsLoginIfInStorage() != "true"){
      this.route.navigate(['login']);
    };
}

}
