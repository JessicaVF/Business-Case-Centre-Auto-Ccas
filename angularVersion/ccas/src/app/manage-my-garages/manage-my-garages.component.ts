import { Component, OnInit } from '@angular/core';
import { GarageService } from '../garage.service';
import { Garage } from '../models/garage.model';

@Component({
  selector: 'app-manage-my-garages',
  templateUrl: './manage-my-garages.component.html',
  styleUrls: ['./manage-my-garages.component.css']
})
export class ManageMyGaragesComponent implements OnInit {

  garages!:Garage[];

  constructor(private garageService: GarageService) { }

  ngOnInit(): void {
    this.garageService.getAllByUser(2).subscribe(data => this.garages = data)
  }

}
