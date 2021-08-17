import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user!:User;
  editUser!:number;
  editUserForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private route: Router) {

}

  ngOnInit(): void {
  }
  edit(id:number){
    this.editUser = id;
    this.editUserForm = this.fb.group({
      lastname: this.fb.control(this.user.lastname, Validators.required),
      firstname: this.fb.control(this.user.firstname, Validators.required),
      email: this.fb.control(this.user.email, Validators.required),
      telephone: this.fb.control(this.user.email, Validators.required),
      siret: this.fb.control(this.user.siret+ "", Validators.required),
      password: this.fb.control(this.user.password, Validators.required)


  })
  }
  delete(id:number){
    this.userService.delete(id).subscribe(r => location.reload());;

  }
  submitForm(){

    this.editUser = 0;
    const formInfo = this.editUserForm.value;
    this.userService.edit(formInfo, this.user.id).subscribe(r => location.reload());

  }

}
