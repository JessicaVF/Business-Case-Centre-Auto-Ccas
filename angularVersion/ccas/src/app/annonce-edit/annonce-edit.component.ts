import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnonceService } from '../annonce.service';
import { AuthService } from '../auth.service';
import { Annonce } from '../models/annonce';
import { User } from '../models/user.model';
import { UserService } from '../user.service';


@Component({
  selector: 'app-annonce-edit',
  templateUrl: './annonce-edit.component.html',
  styleUrls: ['./annonce-edit.component.css']
})
export class AnnonceEditComponent implements OnInit {

  editAnnonceForm!: FormGroup;
  annonce!: Annonce;
  makes: Array<any> =[];
  models: Array<any>=[];
  fuelTypes: Array<any>=[];
  usernameLogged!:any;
  user!:User;
  photos!:any;
  noPhotos = false;
  isAdmin!: any;

  constructor(private authService: AuthService, private userService: UserService, private fb: FormBuilder, private annonceService: AnnonceService, private route: ActivatedRoute, private router: Router)
  {

  }

  ngOnInit(): void {
    this.checkIfLogin();
    this.usernameLogged = this.authService.getUsernameInStorage();
    this.isAdmin = this.authService.getIfAdminInStorage();


    const id: any= this.route.snapshot.paramMap.get('id');
    this.annonceService.getOneForEdit(+id).then( (data:any) => {
      if(data.author.username != this.usernameLogged && this.isAdmin != "true" ){
        this.router.navigate(['/accueil'])
      }
      this.annonce = data;
      this.annonceService.getMakes().then( data => this.makes = data);
      this.annonceService.getFuelTypes().then(data => this.fuelTypes = data);
      this.userService.getOne().subscribe(data => this.user = data);
      this.createForm();
      this.photos = this.editAnnonceForm.value.photos
    } );
  }

  getModels():any{

    this.annonceService.getModelsByMake(this.editAnnonceForm.value.make).then(data=>this.models = data);
  }

  createForm(){

      this.editAnnonceForm = this.fb.group({
      id: this.fb.control(this.annonce.id, Validators.required),
      title: this.fb.control(this.annonce.title, Validators.required),
      description: this.fb.control(this.annonce.description, Validators.required),
      shortDescription: this.fb.control(this.annonce.shortDescription, Validators.required),
      price: this.fb.control(this.annonce.price, Validators.required),
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
    this.annonceService.edit(formInfo, this.annonce.id).subscribe(r => this.router.navigate(['/annonces']));
  }

  cancelEdit(){
    this.router.navigate(['annonces']);
  }

  getPhotos(event:any){

    this.noPhotos = false;
    for(let i = 0; i < event.target.files.length; i++)
    {
      const file = event.target.files[i];
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[i]);
      reader.onload =(event2)=>
      {
        for(let j = 0; j <= 4; j++)
        {
          if(this.photos[j] == null)
          {
            this.photos[j] = reader.result;
            break
          }
        }
      }
    }

  }
  deletePhoto(event:any){

      this.photos.splice(this.photos.indexOf(event.path[0].src), 1);
    if(this.photos.length == 0){
      this.noPhotos = true;
    }
  }

  checkIfLogin(){
    if(this.authService.getIsLoginIfInStorage() != "true"){
      this.router.navigate(['login']);
    };
}

}
