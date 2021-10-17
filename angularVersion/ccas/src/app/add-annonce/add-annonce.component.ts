import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnnonceService } from '../annonce.service';
import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent implements OnInit {

  user!:User;
  makes: Array<any> =[];
  models: Array<any>=[];
  fuelTypes: Array<any>=[];
  addAnnonceForm!: FormGroup;
  imgURL:Array<any>=[];

  constructor(private userService: UserService, private fb: FormBuilder, private annonceService : AnnonceService) {
    this.addAnnonceForm = fb.group({
      title: fb.control('', Validators.required),
      description: fb.control('', Validators.required),
      shortDescription: fb.control('', Validators.required),
      circulationYear: fb.control('', Validators.required),
      kilometers: fb.control('', Validators.required),
      price: fb.control('', Validators.required),
      photos: fb.control('', Validators.required),
      make: fb.control(false, Validators.required),
      model: fb.control(false, Validators.required),
      fuelType: fb.control(false, Validators.required),
      user: fb.control('', Validators.required),
      garage: fb.control('', Validators.required),

    })
   }

  ngOnInit(): void {
    this.userService.getOne().subscribe
    ( data => {
      this.user = data;}
    );
    this.annonceService.getMakes().then( data => this.makes = data);
    this.annonceService.getFuelTypes().then(data => this.fuelTypes = data);
  }
  getModels():any{
    this.annonceService.getModelsByMake(this.addAnnonceForm.value.make).then(data=>this.models = data);
  }
  getPhotos(event:any)
  {
    for(let i = 0; i < event.target.files.length; i++)
    {
      const file = event.target.files[i];
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[i]);
      reader.onload =(event2)=>
        //{ this.imgURL[i] = reader.result}
      {
        for(let j = 0; j < 5; j++)
        {
          if(this.imgURL[j] == null)
          {
            console.log('null');

            this.imgURL[j] = reader.result;
            break
          }
        }
      }
    }
    // const file = event.target.files[0];
    // let reader = new FileReader();
    // reader.readAsDataURL(event.target.files[0]);
    // reader.onload =(event2)=>{ this.imgURL[0] = reader.result}
  }
  addMorePhotos(event:any){
    for(let i = 0; i < event.target.files.length; i++){
      const file = event.target.files[i];
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[i]);
      reader.onload =(event2)=>{
        for(let j = 0; j < 5; i++){
          if(this.imgURL[j] == null){
            this.imgURL[j] = reader.result;
            break
          }
          // else if this.imgURL[5] != null put the new phot at the place of the last one?
        }

      }
    }
  }
  submitForm(){

    let formInfo = this.addAnnonceForm.value;
    let photos = this.imgURL;
    formInfo.photos = photos;


    formInfo.user = this.user.id;
    let dataReady = {"title": formInfo.title, "description":formInfo.description, "shortDescription":formInfo.shortDescription, "circulationYear": formInfo.circulationYear, "kilometers": formInfo.kilometers, "price": formInfo.price, "photos": formInfo.photos };
    let dataToRetrieve = {"user":formInfo.user, "make": 3, "model": formInfo.model, "fuelType": formInfo.fuelType, "garage": formInfo.garage}
    const data = [dataToRetrieve, dataReady];
    this.annonceService.add(data).subscribe(r => location.reload());
  }

}
