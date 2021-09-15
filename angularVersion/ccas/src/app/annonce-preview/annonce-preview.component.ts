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
  data!:any;
  usernameLogged!:any;
  user!:User;
  editAnnonce!: number;
  editAnnonceForm!: FormGroup;
  makes: Array<any> =[];
  models: Array<any>=[];
  fuelTypes: Array<any>=[];
  isAdmin!: any;

  constructor(private userService: UserService, private authService: AuthService, private fb: FormBuilder, private annonceService : AnnonceService) { }

  ngOnInit(): void {
    this.usernameLogged = this.authService.getUsernameInStorage();
    console.log(this.usernameLogged);
    this.isAdmin = this.authService.getIfAdminInStorage();
    console.log("isadmin", + this.isAdmin);

    // this.userService.getOne().subscribe
    // ( data => {
    //   this.user = data;}
    // );
    this.annonceService.getMakes().then( data => this.makes = data);
    this.annonceService.getFuelTypes().then(data => this.fuelTypes = data);
    this.data = ["annonce", this.annonce.id];
    // this.authService.isAdmin().subscribe((data:any) => this.isAdmin = data);

  }

  getModels():any{
    this.annonceService.getModelsByMake(this.editAnnonceForm.value.make).then(data=>this.models = data);
  }

  edit(id: number){

    this.editAnnonce = id;
    this.editAnnonceForm = this.fb.group({
      id: this.fb.control(this.annonce.id, Validators.required),
      title: this.fb.control(this.annonce.title, Validators.required),
      description: this.fb.control(this.annonce.description, Validators.required),
      shortDescription: this.fb.control(this.annonce.shortDescription, Validators.required),
      price: this.fb.control(this.annonce.price, Validators.required),
      // author: this.fb.control(this.annonce.author.id, Validators.required),
      circulationYear: this.fb.control(this.annonce.circulationYear, Validators.required),
      kilometers: this.fb.control(this.annonce.kilometers, Validators.required),
      photos:this.fb.control(this.annonce.photos, Validators.required),
      fuelType: this.fb.control(this.annonce.fuelType, Validators.required),
      make: this.fb.control(this.annonce.make, Validators.required),
      model: this.fb.control(this.annonce.model, Validators.required),
      garage: this.fb.control(this.annonce.garage, Validators.required)

    })
  }

  submitForm(){

    let formInfo = this.editAnnonceForm.value;
    this.annonceService.edit(formInfo, this.annonce.id).subscribe(r => location.reload());
  }

}
