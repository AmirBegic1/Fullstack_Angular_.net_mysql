import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
 readonly APIUrl ="http://localhost:64328/api";
 readonly SongUrl ="http://localhost:64328/Pjesme"; 
  constructor(private http:HttpClient) { }


  getizvList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/izvodjac');

  }

  addIzvodjac(val:any){
    return this.http.post(this.APIUrl+'/Izvodjac',val);
  }

  updateIzvodjac(val:any){
    return this.http.put(this.APIUrl+'/Izvodjac',val);
  }

  deleteIzvodjac(val:any){
    return this.http.delete(this.APIUrl+'/Izvodjac',val);
  }

  getpjsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Pjesme');

  }
  

  addPjesme(val:any){
    return this.http.post(this.APIUrl+'/Pjesme',val);
  }

  updatePjesme(val:any){
    return this.http.put(this.APIUrl+'/Pjesme',val);
  }

  deletePjesme(val:any){
    return this.http.delete(this.APIUrl+'/Pjesme',val);
  }


  UpoladSong(val:any){
    return this.http.post(this.APIUrl+'/Pjesme/SaveFile',val);

  }

  getAllIzvodjaciIme():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Pjesme/GetAllIzvodjaciIme');
  }

}
