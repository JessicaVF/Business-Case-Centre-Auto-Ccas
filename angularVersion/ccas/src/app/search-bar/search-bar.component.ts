import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { LabelType } from "@angular-slider/ngx-slider";
import { ModuleResolutionKind } from 'typescript';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  marques = ["ford", "toyota", "montero"];
  modeles = ["a", "b", "c"];
  carburants = ["diesel", "gasolina"];
  rechercheForm!: FormGroup;

  anneeForm: FormGroup = new FormGroup({
    annee: new FormControl([20, 80])
  });
  optionsA: Options = {
    floor: 0,
    ceil: 100,
    step: 5


  }


  kilometrageForm: FormGroup = new FormGroup({
    kilometrage: new FormControl([20, 80])
  });
  optionsK: Options = {
    floor: 0,
    ceil: 100,
    step: 5
  };
  prixForm: FormGroup = new FormGroup({
    prix: new FormControl([20, 80])
  });
  optionsP: Options = {
    floor: 0,
    ceil: 100,
    step: 5

  }
  constructor(private fb: FormBuilder) {
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
  }

}
