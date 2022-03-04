import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PjesmeComponent} from './pjesme/pjesme.component';
import {IzvodjacComponent} from './izvodjac/izvodjac.component';

const routes: Routes = [
  {path:'pjesme',component:PjesmeComponent},
  {path:'izvodjac',component:IzvodjacComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
