import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { GarageService } from '../garage.service';
import { Garage } from '../models/garage.model';

@Component({
  selector: 'app-manage-my-garages',
  templateUrl: './manage-my-garages.component.html',
  styleUrls: ['./manage-my-garages.component.css']
})
export class ManageMyGaragesComponent implements OnInit {

  garages!:Garage[];
  p: number = 1;

  constructor(private garageService: GarageService, private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.garageService.getAllByUser().subscribe(data =>  this.garages= data
    );
    this.checkIfLogin();
  }
  checkIfLogin(){
    if(this.authService.getIsLoginIfInStorage() != "true"){
      this.route.navigate(['login']);
    };
}

}
