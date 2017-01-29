import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {AppRoutingModule, routableComponents} from "./app-routing.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports:      [ BrowserModule,FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, routableComponents ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
