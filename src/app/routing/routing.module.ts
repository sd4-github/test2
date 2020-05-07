import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from "@angular/router";
import { DetailscmpntComponent } from "../detailscmpnt/detailscmpnt.component";
import { CmpntComponent } from "../cmpnt/cmpnt.component";



const route:Routes=[
  { path: 'details', component: DetailscmpntComponent, children: [{ path: ':id', component: CmpntComponent}]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
