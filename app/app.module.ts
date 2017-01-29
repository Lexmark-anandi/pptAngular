import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {AppRoutingModule, routableComponents} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {CanActivateAuthGuard} from "./can-activate.service";
import {RouteCompHolderComponent} from "./routeCompHolder.component";

@NgModule({
  imports:      [ BrowserModule,FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, routableComponents, RouteCompHolderComponent],
  providers: [CanActivateAuthGuard],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
