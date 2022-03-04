import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-pjs',
  templateUrl: './show-pjs.component.html',
  styleUrls: ['./show-pjs.component.css']
})
export class ShowPjsComponent implements OnInit {

  constructor(private service:SharedService) { }

  PjesmaList:any=[];
PjesmaIme:string;
Izvodjac:string;
DateOfJoining:string;
SongFileName:string;
SongFilePath:string; // za putanju

Ocjena:string;
  ModalTitle:string;
  ActivateAddEditPjsComp:boolean=false;
  pjs:any;

  ngOnInit(): void {
    this.refreshPjsList();
  }

  

  addClick(){
    this.pjs={
      PjesmaId:0,
      PjesmaIme:"",
      Izvodjac:"",
      DateOfJoining:"",
      SongFileName:"pjesmaa.mp3",
      Ocjena:"anonymous.png"
    }
    this.ModalTitle="Dodaj Pjesmu";
    this.ActivateAddEditPjsComp=true;

  }

  editClick(item){
    console.log(item);
    this.pjs=item;
    this.ModalTitle="Azuriraj Pjesmu";
    this.ActivateAddEditPjsComp=true;
  }

  deleteClick(item){
    if(confirm('Da li ste sigurni da zelite izbrisati ovu pjesmu? ')){
      this.service.deletePjesme(item.PjesmaId).subscribe(data=>{
        alert(data.toString());
        this.refreshPjsList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditPjsComp=false;
    this.refreshPjsList();
  }


  refreshPjsList(){
    this.service.getpjsList().subscribe(data=>{
      this.PjesmaList=data;
    });
  }

}

