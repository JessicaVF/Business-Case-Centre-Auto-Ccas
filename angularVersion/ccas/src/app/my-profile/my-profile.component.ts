import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  user!:User;
  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getOne().subscribe( data => {
      this.user = data;

      ;
    } );
    // this.userService.test().subscribe(data=> {
    //   console.log(data);
    // });
  }

}
