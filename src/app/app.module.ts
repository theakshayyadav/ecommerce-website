import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StateinfoComponent } from './stateinfo/stateinfo.component';
import {HttpClientModule } from '@angular/common/http';
import { FinddataComponent } from './finddata/finddata.component'
@NgModule({
  declarations: [
    AppComponent,
    StateinfoComponent,
    FinddataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
