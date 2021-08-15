import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { LabelType } from "@angular-slider/ngx-slider";
import { ModuleResolutionKind } from 'typescript';
import { AnnonceService } from '../annonce.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  makes: Array<any> =[];
  models: Array<any>=[];
  fuelTypes: Array<any>=[];
  searchForm!: FormGroup;

  // Options for the rangers

  optionsKilometers: Options = {
    floor: 0,
    ceil: 150000,
    step: 5
  };

  optionsCirculationYear: Options = {
    floor: 1940,
    ceil: 2021,
    step: 1

  }

  optionsPrice: Options = {
    floor: 100,
    ceil: 70000,
    step: 5
  }

  // end of options for the rangers



  constructor(private fb: FormBuilder, private annonceService : AnnonceService, private route: Router) {

    this.searchForm = fb.group({
      make: fb.control(false),
      model: fb.control(false),
      fuelType: fb.control(false),
      circulationYear: new FormControl([1940, 2021]),
      kilometers: new FormControl([0, 150000]),
      price: new FormControl([100, 70000])
    })

  }

  ngOnInit(): void {

    this.annonceService.getMakes().then( data => this.makes = data);
    this.annonceService.getFuelTypes().then(data => this.fuelTypes = data);

  }

  getModels():any{
    this.annonceService.getModelsByMake(this.searchForm.value.make).then(data=>this.models = data);
  }
  submitForm(){
    const formsInfo = this.searchForm.value;
    this.annonceService.getByUserSelection(formsInfo).then(data=> this.route.navigate(['/home']));
  }


}
