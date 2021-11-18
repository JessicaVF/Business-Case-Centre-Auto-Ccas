import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnnonceService } from '../annonce.service';
import { AuthService } from '../auth.service';
import { Annonce } from '../models/annonce';
import { User } from '../models/user.model';
import { UserService } from '../user.service';


@Component({
  selector: 'app-annonce-preview',
  templateUrl: './annonce-preview.component.html',
  styleUrls: ['./annonce-preview.component.css']
})
export class AnnoncePreviewComponent implements OnInit {

  @Input() annonce!:Annonce;
  @Input() atHome:any;

  data!:any;
  usernameLogged!:any;
  user!:User;
  makes: Array<any> =[];
  models: Array<any>=[];
  fuelTypes: Array<any>=[];
  isAdmin!: any;

  constructor(private userService: UserService, private authService: AuthService, private fb: FormBuilder, private annonceService : AnnonceService) { }

  ngOnInit(): void {
    this.usernameLogged = this.authService.getUsernameInStorage();
    this.isAdmin = this.authService.getIfAdminInStorage();
    this.annonceService.getMakes().then( data => this.makes = data);
    this.annonceService.getFuelTypes().then(data => this.fuelTypes = data);
    this.data = ["annonce", this.annonce.id];
  }



}
