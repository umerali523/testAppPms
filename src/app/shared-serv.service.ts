import { Injectable } from '@angular/core';

@Injectable()
export class SharedServService {

  constructor() { }

  isLoggedIn(){
    var user = localStorage.getItem('loggedIn');
    if(user == "true"){
      return true;
    }else{
      return false;
    }
  }

}
