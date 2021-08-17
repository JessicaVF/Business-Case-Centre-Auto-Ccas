import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user!:User;
  editUser!:number;
  constructor() { }

  ngOnInit(): void {
  }
  edit(id:number){
    this.editUser = id;
  }

}
