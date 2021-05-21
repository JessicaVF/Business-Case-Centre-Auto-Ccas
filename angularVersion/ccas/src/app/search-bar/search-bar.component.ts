import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  sliderForm: FormGroup = new FormGroup({
    sliderControl: new FormControl([20, 80])
  });
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 5
  };
  constructor() {

  }

  ngOnInit(): void {
  }

}
