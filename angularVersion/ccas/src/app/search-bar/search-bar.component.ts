import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  anneeForm: FormGroup = new FormGroup({
    annee: new FormControl([20, 80])
  });
  optionsA: Options = {
    floor: 0,
    ceil: 100,
    step: 5
  };
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
  };
  constructor() {

  }

  ngOnInit(): void {
  }

}
