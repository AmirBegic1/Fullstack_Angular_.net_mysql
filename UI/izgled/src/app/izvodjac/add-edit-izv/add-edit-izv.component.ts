import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-izv',
  templateUrl: './add-edit-izv.component.html',
  styleUrls: ['./add-edit-izv.component.css']
})
export class AddEditIzvComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() izv:any;
  IzvodjacId:string;
  IzvodjacIme:string;

  ngOnInit(): void {
    this. IzvodjacId=this.izv. IzvodjacId;
    this.IzvodjacIme=this.izv.IzvodjacIme;
  }

  addIzvodjac(){
    var val = {IzvodjacId:this.IzvodjacId,
                IzvodjacIme:this.IzvodjacIme};
    this.service.addIzvodjac(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateIzvodjac(){
    var val = {IzvodjacId:this.IzvodjacId,
      IzvodjacIme:this.IzvodjacIme};
    this.service.updateIzvodjac(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
