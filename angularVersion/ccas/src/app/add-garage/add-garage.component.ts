import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GarageService } from '../garage.service';

@Component({
  selector: 'app-add-garage',
  templateUrl: './add-garage.component.html',
  styleUrls: ['./add-garage.component.css']
})
export class AddGarageComponent implements OnInit {

  isAddForm:boolean = false;
  addGarageForm!: FormGroup;

  constructor(private fb: FormBuilder, private garageService: GarageService) { }

  ngOnInit(): void {
  }
  showAddForm(){
    this.isAddForm = true;
    this.addGarageForm = this.fb.group({
      name: this.fb.control('', Validators.required),
      telephone: this.fb.control('', Validators.required),
      road: this.fb.control('', Validators.required),
      number: this.fb.control('', Validators.required),
      complement: this.fb.control('', Validators.required),
      codePostal: this.fb.control('', Validators.required),
      city: this.fb.control('', Validators.required),
      // user: this.fb.control(this.garage.user.id)
    });
  }
  submitAddForm()
  {
    this.isAddForm = false;
    const formInfo = this.addGarageForm.value;
    let addressInput = {"number": formInfo.number, "complement": formInfo.complement,
                        "road": formInfo.road, "codePostal": formInfo.codePostal, "city": formInfo.city};
    let garageInfo = {"name":formInfo.name, "telephone":formInfo.telephone, "user":formInfo.user};
    let infoToSend = [addressInput, garageInfo];
    this.garageService.add(infoToSend).subscribe(r => location.reload());
  }
  cancelAddGarage(){
    this.isAddForm = false;
  }

}
