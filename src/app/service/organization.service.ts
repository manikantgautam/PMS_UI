import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private httpClient:HttpClient) { 

  }
  
  login(postData){
    return this.httpClient.post(`http://localhost:9000/login`, postData);
  }

  registration(postData){
    return this.httpClient.post(`http://localhost:9000/createOrg`, postData);
  }
  getUsersOrganization(userId) {
    return this.httpClient.get(`http://localhost:9000/organization/all?userId=${userId}`);
  }
}
