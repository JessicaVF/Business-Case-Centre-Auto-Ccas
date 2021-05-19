import { Injectable } from '@angular/core';
import { Annonce } from './models/annonce';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
annonce!: Annonce[];
dummyAnnonce: Annonce[] = [
  {reference:" string",
    titre:" string",
    aneeMiseCirculation: 2000,
    marque:" string",
    modele:" string",
    carburant:" string",
    kilometrage: 2000,
    descriptionComplete:" string",
    descriptionCourt:" string",
    prix: 2000,
    datePublication: new Date,
    photos:["../../assets/cadillac_1_preview.jpg", "dummyPhoto", "dummyPhoto", "dummyPhoto", "dummyPhoto"]
  }

];

link = ""

  constructor(private http: HttpClient) { }

  async getAll(): Promise<any[]> {
    return await this.http.get<any[]>(this.link).toPromise();
  }

  dummyAll() {
    return this.dummyAnnonce
  }
}
