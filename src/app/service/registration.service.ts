import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient:HttpClient) { }

  

  registrationReq(postData){
    return this.httpClient.post(`http://localhost:8080/registerReq`, postData);
  }

}
