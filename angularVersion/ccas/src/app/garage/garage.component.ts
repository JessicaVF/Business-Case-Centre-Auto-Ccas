import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GarageService } from '../garage.service';
import { Garage } from '../models/garage.model';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css']
})
export class GarageComponent implements OnInit {

  @Input() garage!:Garage;
  editGarage!:number;
  editGarageForm!: FormGroup;

  constructor(private fb: FormBuilder, private garageService: GarageService) { }

  ngOnInit(): void {
  }
  edit(id:number){
    this.editGarage = id;
    this.editGarageForm = this.fb.group({
      id: this.fb.control(this.garage.id, Validators.required),
      name: this.fb.control(this.garage.name, Validators.required),
      telephone: this.fb.control(this.garage.telephone, Validators.required),
      user: this.fb.control(this.garage.user, Validators.required),
      address: this.fb.control(this.garage.address, Validators.required),
    })

  }
  submitForm(){
    this.editGarage = 0;
    const formInfo = this.editGarageForm.value;
    this.garageService.edit(formInfo, this.garage.id).subscribe(r => location.reload());
  }
  delete(id:number){
     this.garageService.delete(id).subscribe(r => location.reload());;

  }

}
