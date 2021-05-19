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
  {reference: 0,
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
  },
  {reference: 1,
    titre:" string 2",
    aneeMiseCirculation: 2000,
    marque:" string 2",
    modele:" string 2",
    carburant:" string 2",
    kilometrage: 2000,
    descriptionComplete:" string 2",
    descriptionCourt:" string 2",
    prix: 2000,
    datePublication: new Date,
    photos:["../../assets/cadillac_1_preview.jpg", "dummyPhoto", "dummyPhoto", "dummyPhoto", "dummyPhoto"]
  },
  {reference: 3,
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
  },
  {reference: 4,
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
  },
  {reference: 5,
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
  },
  {reference: 6,
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
  },
  {reference: 7,
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
  },
  {reference: 8,
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
  getOne(id: number): Observable<Annonce>{
    return this.http.get<Annonce>(this.link + "/"+ id)
  }
  getOneDummy(id: number){
    console.log(id +"in function")
    return this.dummyAnnonce[id]
  }
}

