import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AnnonceService } from '../annonce.service';

@Component({
  selector: 'app-reference-search',
  templateUrl: './reference-search.component.html',
  styleUrls: ['./reference-search.component.css']
})
export class ReferenceSearchComponent implements OnInit {

  searchForm!: FormGroup;

  constructor(private fb: FormBuilder, private annonceService : AnnonceService) {

    this.searchForm = fb.group({
      id: fb.control('')
    })
  }

  ngOnInit(): void {
  }
  submitForm(){
    const formsInfo = this.searchForm.value;
    console.log(formsInfo.id);

     this.annonceService.getOne(formsInfo.id).subscribe((data:any) => console.log(data));
  }
}
