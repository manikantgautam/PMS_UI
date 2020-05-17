import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { 

  }

  login(postData){
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/x-www-form-urlencoded'
    //   })};
    //   postData.username = postData.userName;
    //return this.httpClient.post(`http://localhost:8080/login?username=${postData.username}&password=${postData.password}`, postData,httpOptions);
    return this.httpClient.post(`http://localhost:8080/login`,postData);
  }

  registration(postData){
    return this.httpClient.post(`http://localhost:8080/register`, postData);
  }
  getData(ontologyName) {
    return this.httpClient.get(``);
  }
  validateToken(token){
    return this.httpClient.post(`http://localhost:8080/isvalidtoken?token=${token}`, {});
  }
}
