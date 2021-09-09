import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user!:User;
  data!:any;
  editUser!:number;
  editUserForm!: FormGroup;
  editPasswordForm!: FormGroup;
  usernameLogged!:any;
  isForEditPassword = false;

  constructor(private fb: FormBuilder, private userService: UserService, private authService: AuthService, private route: Router) {

}

  ngOnInit(): void {
    this.usernameLogged = this.authService.getUsernameInStorage();
    this.data = ["user", this.user.id];
  }
  edit(id:number){
    this.editUser = id;
    this.editUserForm = this.fb.group({
      lastname: this.fb.control(this.user.lastname, Validators.required),
      firstname: this.fb.control(this.user.firstname, Validators.required),
      email: this.fb.control(this.user.email, Validators.required),
      telephone: this.fb.control(this.user.email, Validators.required),
      siret: this.fb.control(this.user.siret.toString(), Validators.required),
      username: this.fb.control(this.user.username, Validators.required)

    })
  }
  submitForm(){
    this.editUser = 0;
    const formInfo = this.editUserForm.value;
    this.userService.edit(formInfo, this.user.id).subscribe(r => location.reload());
  }
  editPassword(){
    this.isForEditPassword = true;
    this.editPasswordForm = this.fb.group({
      currentPassword: this.fb.control('', Validators.required),
      newPassword: this.fb.control('', Validators.required),
    })
  }
  submitEditPassword(){

    const formInfo = this.editPasswordForm.value;
    this.userService.changePassword(formInfo, this.user.id).subscribe(r => location.reload());


  }

  delete(id:number){
    this.userService.delete(id).subscribe(r => location.reload());;

  }


}
