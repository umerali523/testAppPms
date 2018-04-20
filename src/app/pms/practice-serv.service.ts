import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { PersistenceService } from 'angular-persistence/src/services/persistence.service';
import { StorageType } from 'angular-persistence/src/constants/persistence.storage_type';
import * as SecureLS from 'secure-ls';

@Injectable()
export class PracticeServService {

  constructor(private http: HttpClient , private persistenceServ : PersistenceService) { }

  resName = "detailed";
  page = '1';
  start = '0';
  limit = '1000';
  tzOffset = String(new Date().getTimezoneOffset());
  localStore = new SecureLS();
  
  // user_id = localStorage.getItem('user_id');
  // practice_id = localStorage.getItem('practice_id');
  getPracticeList(){
    
   // return this.http.post('https://us-central1-parenttrac-c005c.cloudfunctions.net/getUserList',{userID : 'hEEJUS3KlRaeNeKeuX5AYdGwvON2'});
   //var token = localStorage.getItem('access_token');

   //?token='+token+'&tz=-300&practice_id=null&user_id=105&response=detailed&page=1&start=0&limit=1000'
  
    return this.http.get('https://api-charlie.carecinch.com/practices/listing.json' , {
      params : {
        'page' :this.page,
        'start' : this.start,
        'limit' : this.limit,
//        'user_id' : this.persistenceServ.get('user_id' , StorageType.SESSION),
        'user_id' :this.localStore.get('user_id'),
        'tz' : this.tzOffset,
        'response' : this.resName

     }
    });
  }

  getLocationList(){
    
    //var token = localStorage.getItem('access_token');
   
     return this.http.get('https://api-charlie.carecinch.com/practices/locations.json' , {
       params : {
         'page' :this.page,
         'start' : this.start,
         'limit' : this.limit,
        'user_id' :this.localStore.get('user_id'),
        //'user_id' : this.persistenceServ.get('user_id' , StorageType.SESSION),
         'tz' : this.tzOffset,
         'response' : this.resName,
         'practice_id' : this.localStore.get('practice_id' , StorageType.SESSION)
 
      }
     });
   }

  deleteMember(id){
    console.log('Deleting Member');
  }
  addUser(userObj){
    console.log('User Service with User Object:',userObj);

  }
}
