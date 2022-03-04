import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-izv',
  templateUrl: './show-izv.component.html',
  styleUrls: ['./show-izv.component.css']
})
export class ShowIzvComponent implements OnInit {

  constructor(private service:SharedService) { }

  IzvodjacList:any=[];

  ModalTitle:string;
  ActivateAddEditIzvComp:boolean=false;
  izv:any;


  IzvodjacIdFilter:string="";
  IzvodjacNameFilter:string="";
  IzvodjacListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick(){
    this.izv={
      IzvodjacId:0,
      IzvodjacIme:""
    }
    this.ModalTitle="Dodaj Izvodjaca";
    this.ActivateAddEditIzvComp=true;

  }

  editClick(item){
    this.izv=item;
    this.ModalTitle="Uredi Izvodjaca";
    this.ActivateAddEditIzvComp=true;
  }

  deleteClick(item){
    if(confirm('Da li ste sigurni da zelite obrisati izvodjaca? ')){
      this.service.deleteIzvodjac(item.IzvodjacId).subscribe(data=>{
        alert(data.toString());
        this.refreshDepList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditIzvComp=false;
    this.refreshDepList();
  }


  refreshDepList(){
    this.service.getizvList().subscribe(data=>{
      this.IzvodjacList=data;
      this.IzvodjacListWithoutFilter=data;
    });
  }

  FilterFn(){
    var IzvodjacIdFilter = this.IzvodjacIdFilter;
    var IzvodjacNameFilter = this.IzvodjacNameFilter;

    this.IzvodjacList = this.IzvodjacListWithoutFilter.filter(function (el){
        return el.IzvodjacId.toString().toLowerCase().includes(
          IzvodjacIdFilter.toString().trim().toLowerCase()
        )&&
        el.IzvodjacIme.toString().toLowerCase().includes(
          IzvodjacNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop,asc){
    this.IzvodjacList = this.IzvodjacListWithoutFilter.sort(function(a,b){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
