import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUserForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private route: Router) {

    this.addUserForm = fb.group({
      lastname: fb.control('', Validators.required),
      firstname: fb.control('', Validators.required),
      email: fb.control('', Validators.required),
      telephone: fb.control('', Validators.required),
      siret: fb.control('', Validators.required),
      password: fb.control('0123456789', Validators.required),
      username:fb.control('')

    })
   }

  ngOnInit(): void {
  }

  submitForm(){

    if (this.addUserForm.valid) {
      const formInfo = this.addUserForm.value;
      this.userService.add(formInfo).subscribe(r => location.reload());
    }

  }

}
