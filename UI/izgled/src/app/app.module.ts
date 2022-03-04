import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IzvodjacComponent } from './izvodjac/izvodjac.component';
import { ShowIzvComponent } from './izvodjac/show-izv/show-izv.component';
import { AddEditIzvComponent } from './izvodjac/add-edit-izv/add-edit-izv.component';
import { PjesmeComponent } from './pjesme/pjesme.component';
import { ShowPjsComponent } from './pjesme/show-pjs/show-pjs.component';
import { AddEditPjsComponent } from './pjesme/add-edit-pjs/add-edit-pjs.component';
import { SharedService } from './shared.service';

import{HttpClientModule} from '@angular/common/http'
import {FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AppComponent,
    IzvodjacComponent,
    ShowIzvComponent,
    AddEditIzvComponent,
    PjesmeComponent,
    ShowPjsComponent,
    AddEditPjsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
