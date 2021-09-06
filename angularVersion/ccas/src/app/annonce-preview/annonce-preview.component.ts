import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Annonce } from '../models/annonce';


@Component({
  selector: 'app-annonce-preview',
  templateUrl: './annonce-preview.component.html',
  styleUrls: ['./annonce-preview.component.css']
})
export class AnnoncePreviewComponent implements OnInit {

  @Input() annonce!:Annonce;
  usernameLogged!:any;
  editAnnonce!: number;
  editAnnonceForm!: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.usernameLogged = this.authService.getUsernameInStorage();
  }
  edit(id: number){

    this.editAnnonce = id;
    this.editAnnonceForm = this.fb.group({
      id: (this.garage.id, Validators.required),
      make: any,
      author: any,
      photos:any,
      title: string,
      description: string,
      shortDescription: string,
      circulationYear: number,
      kilometers: number,
      fuelType: any,
      model: any,
      garage_id: number,
      price: number,
    })
  }

  delete(id: number) {
    // this.garageService.delete(id).subscribe(r => location.reload());;
  }

}
