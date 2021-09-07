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
  usernameLogged!:any;
  user!:User;
  editAnnonce!: number;
  editAnnonceForm!: FormGroup;
  makes: Array<any> =[];
  models: Array<any>=[];
  fuelTypes: Array<any>=[];

  constructor(private userService: UserService, private authService: AuthService, private fb: FormBuilder, private annonceService : AnnonceService) { }

  ngOnInit(): void {
    this.usernameLogged = this.authService.getUsernameInStorage();
    this.userService.getOne().subscribe
    ( data => {
      this.user = data;}
    );
    this.annonceService.getMakes().then( data => this.makes = data);
    this.annonceService.getFuelTypes().then(data => this.fuelTypes = data);
  }

  getModels():any{
    this.annonceService.getModelsByMake(this.editAnnonceForm.value.make).then(data=>this.models = data);
  }

  edit(id: number){

    this.editAnnonce = id;
    this.editAnnonceForm = this.fb.group({
      id: this.fb.control(this.annonce.id, Validators.required),
      make: this.fb.control(this.annonce.make, Validators.required),
      author: this.fb.control(this.annonce.author.id, Validators.required),
      photos:this.fb.control(this.annonce.photos, Validators.required),
      title: this.fb.control(this.annonce.title, Validators.required),
      description: this.fb.control(this.annonce.description, Validators.required),
      shortDescription: this.fb.control(this.annonce.shortDescription, Validators.required),
      circulationYear: this.fb.control(this.annonce.circulationYear, Validators.required),
      kilometers: this.fb.control(this.annonce.kilometers, Validators.required),
      fuelType: this.fb.control(this.annonce.fuelType, Validators.required),
      model: this.fb.control(this.annonce.model, Validators.required),
      garage: this.fb.control(this.annonce.garage, Validators.required),
      price: this.fb.control(this.annonce.price, Validators.required)
    })
  }

  submitForm(){
    console.log(this.annonce);

    let formInfo = this.editAnnonceForm.value;
    console.log(formInfo);
    // this.annonceService.edit(formInfo).subscribe(r => location.reload);
  }

  delete(id: number) {
    // this.garageService.delete(id).subscribe(r => location.reload());;
  }

}
