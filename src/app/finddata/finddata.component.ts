import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-finddata',
  templateUrl: './finddata.component.html',
  styleUrls: ['./finddata.component.css']
})
export class FinddataComponent implements OnInit {

    states:any;
    divisions:any;
    selectedLevel: any;
    model:any;
    myArray: Array<string> = [];
    districts:any;
    taluka:any;
    villages:any;
    
  constructor(private api:ApiService) { }

  ngOnInit(): void {
  this.api.getdata("http://awsmaster.mahamining.com/master/states/GetState").subscribe((result:any)=>{
    this.states = result.responseData;
  }); 

  }

  statechanged(event:Event)
  {
    let stateid = (<HTMLSelectElement>event.target).value;
    this.api.getdata("http://awsmaster.mahamining.com/master/divisions/" + stateid).subscribe((result:any)=>{
    this.divisions = result.responseData;
    console.log(this.divisions);
  });
  }

  divisionchanged(event:Event)
  {
    let divisionid = (<HTMLSelectElement>event.target).value;
    this.api.getdata("http://awsmaster.mahamining.com/master/districts/GetDistrictByDivisionId?UserId=1&DivisionId=" + divisionid).subscribe((result:any)=>{
      this.districts = result.responseData;

    })
  }
  districtchanged(event:Event){
    let districtid = (<HTMLSelectElement>event.target).value;
    this.api.getdata("http://awsmaster.mahamining.com/master/talukas/GetTalukaByDistrictId/" + districtid).subscribe((result:any)=>{
      this.taluka = result.responseData;
      console.log(this.taluka);
      
  })
  
  }

  talukachanged(event:Event){
    let talukaid = (<HTMLSelectElement>event.target).value;
    this.api.getdata("http://awsmaster.mahamining.com/master/villages/GetVillagesByCriteria/" + talukaid).subscribe((result:any)=>{
      this.villages = result.responseData;
      console.log(this.villages);
      
  });
    
    }


}
