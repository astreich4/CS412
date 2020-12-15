import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import {ListComponent} from './list/list.component';
import {FormsModule} from "@angular/forms";
import { CallToServiceComponent } from './call-to-service/call-to-service.component';
import { ShowMeTheDataComponent } from './show-me-the-data/show-me-the-data.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CallToServiceComponent,
    ShowMeTheDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
