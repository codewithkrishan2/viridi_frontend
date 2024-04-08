import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  API_PATH = "http://localhost:8080/api/v1";

  requestHeaders = new HttpHeaders(
    { 'No-Auth': 'True' }
  );

  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
    this.login(loginData);
  }

  public login(loginData: any) {
    return this.httpClient.post(this.API_PATH + "/auth/login", loginData, { headers: this.requestHeaders });
  }


}
