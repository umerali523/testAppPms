import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginServService {

  constructor(private http: HttpClient) { }

  loginUser(userObj){
   // return this.http.post('https://api-charlie.carecinch.com/users/login.json' , userObj);
   return this.http.post('https://api-charlie.carecinch.com/users/login.json' , userObj);
   
    
  }

}
