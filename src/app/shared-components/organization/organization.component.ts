import { Component, OnInit } from '@angular/core';
import { OrganizationService } from 'src/app/service/organization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {
  organizations: any;

  constructor(private orgService:OrganizationService,private router:Router) {
    this.organizations=[];
   }

  ngOnInit(): void {
    let userId=localStorage.getItem("userId");
    if(userId){
       this.orgService.getUsersOrganization(userId).subscribe(res=>{
          if(res['status'] == 200){
            this.organizations=res['data'];
            console.log(this.organizations);
            
          }
       })
    }
   
    
  }


  onChange(ev){
    this.router.navigateByUrl('/dashboard');
  }
}
