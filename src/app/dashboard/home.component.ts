import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonServService } from '../common-serv.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { PersistenceService } from 'angular-persistence';
import { StorageType } from 'angular-persistence/src/constants/persistence.storage_type';

import { User } from '../login/app.model';
import { AppState } from '../reducers/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl } from '@angular/forms';


import { Validators } from '@angular/forms';




@Component({
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit , OnDestroy {

  users: Observable<User[]>;
  constructor(private commonServ : CommonServService , private persistenceService: PersistenceService , private store: Store<AppState>) {
    console.log('Home Constructor');
    this.users = this.store.select(state => state.user);
    console.log('Users:',this.users);
   }
  ngOnInit(){
    // console.log('Current User:' , this.commonServ.getCurrentUser());
    console.log('Home Oninit:',this.persistenceService.get('token'));
    // this.commonServ.currentUser.subscribe(user=>{
    //   console.log(user);
    // });
    // this.commonServ.currentMessage.subscribe(mess=>{
    //   console.log('Current Message:',mess);
    // });
    // console.log('Current Message:', this.commonServ.);
   

  }
  ngOnDestroy(){
    //console.log('Home On Destroy');
  }

}
