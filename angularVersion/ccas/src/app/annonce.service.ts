import { Injectable } from '@angular/core';
import { Annonce } from './models/annonce';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { isLoweredSymbol } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
link = "";
annonce!: Annonce[];


annonces!:any;
testi !:any;

private messageSource = new BehaviorSubject('default message');
private annoncesSource = new BehaviorSubject([this.annonces]);

currentMessage = this.messageSource.asObservable();
currentAnnonces = this.annoncesSource.asObservable();



  constructor(private http: HttpClient) { }
  currentAnnoncesList(){

  }
  changeMessage(message: string, annonces: any) {
    this.messageSource.next(message)
    this.annoncesSource.next(annonces)
  }
  test(): Observable<Annonce>{
    console.log("in service");
    this.testi = ["teste"];
    console.log(this.testi);
    // return Observable.from(this.testi);
    return this.testi;
  }

  async getAll(): Promise<any[]> {
    this.link= 'http://127.0.0.1:8000/annonce/all';

    return await this.http.get<any[]>(this.link).toPromise();

  }

  getOne(id: number): Observable<Annonce>{
    this.link = 'http://127.0.0.1:8000/annonce/show';
    return this.http.get<Annonce>(this.link + "/"+ id)
  }
  getMakes(): Promise<any[]>{
    this.link = 'http://127.0.0.1:8000/make';
    return this.http.get<any[]>(this.link).toPromise();
  }
  getModelsByMake(id: number): Promise<any[]>{
    this.link = 'http://127.0.0.1:8000/make';
    return this.http.get<any[]>(this.link+ "/"+ id+"/models").toPromise();
  }
  getFuelTypes(): Promise<any[]>{
    this.link = 'http://127.0.0.1:8000/fueltype';
    return this.http.get<any[]>(this.link).toPromise();
  }
  async getByUserSelection(value: Annonce): Promise<any[]> {

    this.link= 'http://127.0.0.1:8000/annonce/search';
    this.annonces= await this.http.post<any[]>(this.link, value).toPromise();

    this.annoncesSource.next(this.annonces)
    console.log("in getUserSelection");

    console.log(this.annonces);
    return this.annonces;
  }
}
