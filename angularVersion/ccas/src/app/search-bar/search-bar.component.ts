import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { LabelType } from "@angular-slider/ngx-slider";
import { ModuleResolutionKind } from 'typescript';
import { AnnonceService } from '../annonce.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  makes: Array<any> =[];
  models: Array<any>=[];
  fuelTypes: Array<any>=[];
  makeSelected!: number;



  prixPlusBas = 10;
  prixPlusHaut = 1500;
  rechercheForm!: FormGroup;


  // forms that shape the rangers

    // form for année de mise en circulation

  anneeForm: FormGroup = new FormGroup({
    annee: new FormControl([0, this.prixPlusHaut])
  });

  optionsYear: Options = {
    floor: this.prixPlusBas,
    ceil: this.prixPlusHaut,
    step: 5
  }

    // form for kilométrage

    kilometrageForm: FormGroup = new FormGroup({
    kilometrage: new FormControl([20, 80])
  });

  optionsB: Options = {
    floor: 0,
    ceil: 100,
    step: 5
  };

  //form for PRIX

  prixForm: FormGroup = new FormGroup({
    prix: new FormControl([20, 80])
  });

  optionsC: Options = {
    floor: 0,
    ceil: 100,
    step: 5

  }

  // end of forms that shape the rangers



  constructor(private fb: FormBuilder, private annonceService : AnnonceService) {

//form that is going to take the data insert for the user to look for cars that
  //match it's criteria
    this.rechercheForm = fb.group({
      marque: fb.control(''),
      modele: fb.control(''),
      carburant: fb.control(''),
      anne: fb.control(''),
      kilometrage: fb.control(''),
      prix: fb.control('')
    })
  }

  ngOnInit(): void {

    this.annonceService.getMakes().then( data => this.makes = data);
    this.annonceService.getFuelTypes().then(data => this.fuelTypes = data);


  }

  getModels():any{

    this.annonceService.getModelsByMake(this.makeSelected).then(data=>this.models = data)

  }
  test(){
    console.log("here");

    console.log(this.anneeForm.value.annee[0]);
  }

}
