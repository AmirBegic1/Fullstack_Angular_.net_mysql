import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-pjs',
  templateUrl: './add-edit-pjs.component.html',
  styleUrls: ['./add-edit-pjs.component.css']
})
export class AddEditPjsComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() pjs:any;
  PjesmaId:string;
  PjesmaIme:string;
  PjesmaList:any=[];
  Izvodjac:string;
  DateOfJoining:string;
  SongFileName:string;
  SongFilePath:string; // za putanju
  Ocjena:string;
  IzvodjacList:any[];

  ngOnInit(): void {
    /*
    this.loadPjesmaList();
    */
  }
/*
  loadIzvodjacList(){
    
    this.service.getAllPjesmaIme().subscribe((data:any)=>{
      
      this.IzvodjacList=data;

      this.PjesmaId=this.pjs.PjesmaId;
      this.PjesmaIme=this.pjs.PjesmaIme;
      this.Izvodjac=this.pjs.Izvodjac;
      this.DateOfJoining=this.pjs.DateOfJoining;
      this.SongFileName=this.pjs.SongFileName;
      this.Ocjena=this.service.SongUrl+this.SongFileName;
    });
  }

  addEmployee(){
    var val = {PjesmaId:this.PjesmaId,
                EmployeeName:this.PjesmaIme,
                Izvodjac:this.Izvodjac,
              DateOfJoining:this.DateOfJoining,
            SongFileName:this.SongFileName,
            Ocjena:this.Ocjena};
    this.service.addPjesma(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updatePjesma(){
    var val = {PjesmaId:this.PjesmaId,
      PjesmaIme:this.PjesmaIme,
      Izvodjac:this.Izvodjac,
    DateOfJoining:this.DateOfJoining,
  SongFileName:this.SongFileName,
  Ocjena:this.Ocjena};

    this.service.updatePjesma(val).subscribe(res=>{
    alert(res.toString());
    });
  }



  uploadSong(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.uploadSong(formData).subscribe((data:any)=>{
      this.SongFileName=data.toString();
      this.SongFilePath=this.service.SongUrl+this.SongFileName;
    });
  }
*/
}

