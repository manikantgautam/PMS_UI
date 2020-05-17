import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { OrganizationService } from 'src/app/service/organization.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userId:number;
  registrationForm: FormGroup;
  loginfailed: boolean;
  tokenNotValid: boolean;
  userData = {};
  organizationCreated: boolean;
  constructor(private loginService:LoginService,private formBuilder: FormBuilder,private router: Router,
    private activatedRoute: ActivatedRoute,private orgService:OrganizationService) {
    this.registrationForm = this.formBuilder.group({
      username:['',Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      organizationName:['',Validators.required],
      organizationOwnerName:['',Validators.required],
      contact:['',Validators.required],
      email:['',Validators.required],
      address:['',Validators.required],
      country:['',Validators.required],
      state:['',Validators.required],
      city:['',Validators.required],
      pincode:['',Validators.required],
      commensementDate:['',Validators.required]
      
  });
  this.userId = 0;
   }

  ngOnInit(): void {
    this.generateNumber();
    this.registrationForm.disable();
    this.activatedRoute.queryParams.subscribe(params => {
      let token = params['token'];
      if(token && token.length>0){
        this.loginService.validateToken(token).subscribe(res=>{
          if(res['status'] == 200 && res['data'] && res['data']['reqStatus'] ==1){
            this.registrationForm.enable();
            this.userData['firstName'] =res['data']['firstname'];
            this.userData['lastName'] =res['data']['lastname'];
            this.userData['email'] =res['data']['email'];
           
          }else{
            this.tokenNotValid=true;
            this.registrationForm.disable();
          }
          
        })
      } 
  });
  }
  reset(){
    this.registrationForm.reset();
    setTimeout(() => {
      this.generateNumber();
    }, 100);
  }
  generateNumber(){
    this.userId = Math.floor(100000 + Math.random() * 900000);;
  }
  onSubmit(){
    console.log(this.registrationForm.value);
    console.log(this.registrationForm.valid);
    
    this.userData['userName']=this.registrationForm.controls.username.value;
    this.userData['password']=this.registrationForm.controls.password.value;
    if(this.registrationForm.valid){
      let data =this.registrationForm.value;
      delete data['confirmPassword'];
      delete data['password'];
      delete data['username'];
      this.loginService.registration(this.userData).subscribe(res=>{
        if(res && res['status'] == 200 && res['data']){
            data['userId'] = res['data']['userId'];
            this.orgService.registration(data).subscribe(res=>{
              if(res && res['status']==200){
                this.organizationCreated=true;
                this.registrationForm.disable();
                setTimeout(() => {
                  this.router.navigateByUrl('/login');
                }, 4000);
              }
            })
        }else{
          
          this.registrationForm.reset();
        }
        
      })
    }
  }

}
