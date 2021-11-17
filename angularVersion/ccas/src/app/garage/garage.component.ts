import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { GarageService } from '../garage.service';
import { Garage } from '../models/garage.model';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css']
})
export class GarageComponent implements OnInit {

  @Input() garage!: Garage;
  data!:any;
  editGarage!: number;
  editGarageForm!: FormGroup;
  addGarageForm!: FormGroup;
  isAddForm:boolean = false ;
  isAdmin: boolean = false ;

  constructor(private fb: FormBuilder, private garageService: GarageService, private authService: AuthService)
  {


  }

  ngOnInit(): void {
    this.data = ["garage", this.garage.id];
    // this.authService.isAdmin().subscribe((data:any) => this.isAdmin = data);
    this.isAdmin = this.authService.getIfAdminInStorage();

  }

  edit(id: number) {

    this.editGarage = id;
    this.editGarageForm = this.fb.group({
      id: this.fb.control(this.garage.id, Validators.required),
      name: this.fb.control(this.garage.name, Validators.required),
      telephone: this.fb.control(this.garage.telephone, Validators.required),
      addressId : this.fb.control(this.garage.address.id),
      road: this.fb.control(this.garage.address.road, Validators.required),
      number: this.fb.control(this.garage.address.number, Validators.required),
      complement: this.fb.control(this.garage.address.complement, Validators.required),
      codePostal: this.fb.control(this.garage.address.codePostal, Validators.required),
      city: this.fb.control(this.garage.address.city, Validators.required)
    })

  }
  submitForm() {
    this.editGarage = 0;
    const formInfo = this.editGarageForm.value;
    let addressInput = {"id": formInfo.addressId, "number": formInfo.number, "complement": formInfo.complement,
                        "road": formInfo.road, "codePostal": formInfo.codePostal, "city": formInfo.city};
    let garageInfo = {"name":formInfo.name, "telephone":formInfo.telephone};
    let infoToSend = [addressInput, garageInfo];
    this.garageService.edit(infoToSend, this.garage.id).subscribe(r => location.reload());
  }

  delete(id: number) {
    this.garageService.delete(id).subscribe(r => location.reload());
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
      user: this.fb.control(this.garage.user.id)
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
  cancelEditGarage(){
    this.editGarage = 0
  }
}
