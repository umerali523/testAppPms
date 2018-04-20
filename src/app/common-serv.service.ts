import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class CommonServService {
  constructor() {
      console.log('Common Service Initializing');
   }
  
  private userSource = new BehaviorSubject<object>({});
  currentUser = this.userSource.asObservable();

  changeUser(user:object){
    this.userSource.next(user);
  }
  getCurrentUser(){
    return this.userSource.getValue();
  }

  private message = new ReplaySubject<string>(1);
  changeMessage(mess:string){
      this.message.next(mess);
    //this.userSource.next(mess);
  }
  currentMessage = this.message.asObservable();

//   getCurrentMessage(){
//       return this.message.
//   }

//  changeTempUser(){
//     this.userSource.next();
//   }
//   getTempCurrentUser(){
//     return this.userSource.getValue();
//   }

  
}