import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AnnonceService } from '../annonce.service';
import { GarageService } from '../garage.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

@Input() data!:any;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private annonceService : AnnonceService, private garageService: GarageService, private userService: UserService) {
    config.backdrop = 'static';
    config.keyboard = false;
   }

  ngOnInit(): void {
  }
  open(confirmDelete:any) {
    this.modalService.open(confirmDelete).result.then(result => {
      if (result == 'confirm')
      {
        this.delete(this.data);
      }
    })
  }
  delete(data:any){

    if (this.data[0] =="annonce"){
      this.annonceService.delete(data[1]).subscribe((r:any) => location.reload());
    }
    if(this.data[0]=="garage"){
      this.garageService.delete(data[1]).subscribe((r:any) => location.reload());
    }
    if(this.data[0]=="user"){
      this.userService.delete(data[1]).subscribe((r:any) => location.reload());
    }

  }
}
