import { LogicalFileSystem } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnnonceService } from '../annonce.service';
import { AuthService } from '../auth.service';
import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  user!:User;

  constructor(private userService: UserService, private authService: AuthService, private route: Router) {}

  ngOnInit(): void {
    this.userService.getOne().subscribe
    ( data => {
      this.user = data;
      }
    );
    this.checkIfLogin();
  }
  checkIfLogin(){
    if(this.authService.getIsLoginIfInStorage() != "true"){
      this.route.navigate(['login']);
    };
}

}

