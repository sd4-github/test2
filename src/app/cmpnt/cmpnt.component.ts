import { Component, OnInit } from '@angular/core';
import { SrvcService } from "../srvc.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-cmpnt',
  templateUrl: './cmpnt.component.html',
  styleUrls: ['./cmpnt.component.css']
})
export class CmpntComponent implements OnInit {
  storeDetails;
  user;
  
  constructor(private service:SrvcService, private actvtdRouter:ActivatedRoute) { }

  ngOnInit() {
    this.user = this.service.getData;
    console.log(this.user);  
    this.actvtdRouter.params.subscribe((details)=>{
        this.storeDetails=this.user.filter((info)=>{
          return info.id==(details.id);
        })[0];
        console.log(this.storeDetails);

      })
      
  }

}
