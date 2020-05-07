import { Component, OnInit } from '@angular/core';
import { SrvcService } from '../srvc.service';


@Component({
  selector: 'app-detailscmpnt',
  templateUrl: './detailscmpnt.component.html',
  styleUrls: ['./detailscmpnt.component.css']
})
export class DetailscmpntComponent implements OnInit {
  fetchId;
  constructor(private service:SrvcService) { }

  ngOnInit() {
    this.service.getUsers().subscribe((info)=>{
      this.fetchId=info;
      console.log(this.fetchId);
      this.service.getData=this.fetchId;
    })
  }

}
