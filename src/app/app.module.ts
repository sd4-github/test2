import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CmpntComponent } from './cmpnt/cmpnt.component';
import { DetailscmpntComponent } from './detailscmpnt/detailscmpnt.component';
import { RoutingModule } from "./routing/routing.module";



@NgModule({
  declarations: [
    AppComponent,
    CmpntComponent,
    DetailscmpntComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
