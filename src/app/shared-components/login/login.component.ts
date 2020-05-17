import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginfailed: boolean;

  constructor(private loginService:LoginService,private formBuilder: FormBuilder,private router: Router) { 
      this.loginForm = this.formBuilder.group({
        userName: ['', Validators.required],
        password: ['', Validators.required]
    });
  }

  get f(){
    return this.loginForm.controls;
}
onSubmit(){
  if(this.loginForm.value)
  console.log(this.loginForm.value);
  this.loginService.login(this.loginForm.value).subscribe(res=>{
    console.log(res);
    if(res && res['status'] == 200){
      localStorage.setItem("userId",res['data']['userId']);
      this.router.navigateByUrl('/organization');
    }else{
      this.loginfailed=true
      this.loginForm.reset();
    }
    
  })
  
}
  ngOnInit(): void {
  }

}
