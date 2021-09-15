import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  loginForm!:FormGroup;
  adminStatus!:any;


  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) {

    this.loginForm = fb.group({
      username: fb.control('', Validators.required),
      password: fb.control('', Validators.required)
    })


  }

  ngOnInit(): void {
  }
  submitForm(){
    if (this.loginForm.valid){
      const formInfo = this.loginForm.value;

      this.authService.login(formInfo)
        .subscribe(
        (data:any) => {

        this.authService.loginChangeStatus();
        this.authService.setTokenInStorage(data.token);
        const tokenDecoded: any = jwt_decode(data.token);
        this.authService.setUsernameInStorage(tokenDecoded.username);
        this.authService.checkIfAdmin(tokenDecoded.roles);
        this.router.navigate(['/profil']);
          //   this.router.navigate(['admin/profil']);

      },
      (error) => {
        console.log(error);

        // location.reload();

      }
      );


  }

  }

}
