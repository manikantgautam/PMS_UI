import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/service/registration.service';
import { OrganizationService } from 'src/app/service/organization.service';

@Component({
  selector: 'app-registration-request',
  templateUrl: './registration-request.component.html',
  styleUrls: ['./registration-request.component.css']
})
export class RegistrationRequestComponent implements OnInit {
  sendInvite : FormGroup;
  requestSent: boolean;
  loginfailed:boolean;
  constructor(private formBuilder: FormBuilder,private router: Router,
    private regService:RegistrationService) { 
    this.sendInvite = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email:['',Validators.required]
  });
  }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.sendInvite.valid){
      console.log(this.sendInvite.value);
      let poastData = this.sendInvite.value;
      this.regService.registrationReq(poastData).subscribe(res=>{
        console.log(res);
        if(res && res['status']==200){
          this.requestSent=true;
          this.sendInvite.reset();
          this.sendInvite.disable();
        
        }
      })
    }
  }

}
