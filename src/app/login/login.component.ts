



import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup , Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { Console } from '@angular/core/src/console';
import { LoginServService } from './login-serv.service';
import { SharedServService } from '../shared-serv.service';
import { CommonServService } from '../common-serv.service';
import { PersistenceService } from 'angular-persistence/src/services/persistence.service';
import { StorageType } from 'angular-persistence/src/constants/persistence.storage_type';

import * as SecureLS from 'secure-ls';

import { User } from './app.model';
import { AppState } from '../reducers/app.state';
import { Store } from '@ngrx/store';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router : Router , private loginServ : LoginServService , private sharedServ : SharedServService , private persistenceService: PersistenceService , private store: Store<AppState> ) {
     this.localStore = new SecureLS();
 
   }
   localStore;


  ngOnInit() {
    if(!this.sharedServ.isLoggedIn()){

    
      console.log('Current Router:',this.router.url)
      if(this.router.url=='/' || this.router.url=='/login' ){
        this.currTemp = 'login';
        
      }else if(this.router.url=='/register' ){
        this.currTemp = 'register';
        
      }
    }else{
      this.router.navigate(['dashboard']);
    }
   
  }

  currTemp;
  loginSpin = false;
  loginError;
  currUser;
  form1 = new FormGroup({
    username : new FormControl('' , [ Validators.required] ),
    password : new FormControl('' , [ Validators.required])

  });

  get username(){
    
    return this.form1.get('username');
  }
  get password(){
    return this.form1.get('password');
  }

  loginUser(){
    // console.log(this.username.errors);
    // console.log(this.password.errors);
    if(this.form1.valid){
      this.loginError='';
      this.loginSpin = true;
      var loginRes = this.loginServ.loginUser(this.form1.value);
      loginRes.subscribe(res=>{
        //console.log(res)
        var resObj = res;
        console.log(resObj);
        if(resObj['response']['code']==-1 || resObj['response']['data']==null){
          this.loginError = resObj['response']['msg'];
        }else{
          //this.commonServ.changeUser(resObj['response']['data']['User']);
          //this.commonServ.changeMessage('Hi There');
          console.log('LoggedIn User:',resObj['response']['data']['User']);
          this.currUser = resObj['response']['data']['User'];
          var token = resObj['response']['data']['User']['token'];
          var practice_id = resObj['response']['data']['User']['practice']['id'];
          var user_id = resObj['response']['data']['User']['id'];
          var practice_id = resObj['response']['data']['User']['practice']['id'];
         
          // this.persistenceService.set('access_token', token , {type: StorageType.SESSION});
          // this.persistenceService.set('practice_id', practice_id , {type: StorageType.SESSION});
          // this.persistenceService.set('user_id', user_id , {type: StorageType.SESSION});

          this.localStore.set('access_token', token);
          this.localStore.set('practice_id', practice_id);
          this.localStore.set('user_id', user_id);

          this.router.navigate(['dashboard']);  
        }
        this.loginSpin = false;
      },
      err=>{
        console.log('Error Occured:',err);
        this.loginError = err.message;
        this.loginSpin = false;
      });
      

    }else{
     if(this.username.errors || this.password.errors){
      this.loginError = "Please provide both Username and Password";
     }
    }
   

  }

  form2 = new FormGroup({
    name : new FormControl('' , [ Validators.required ,Validators.email] ),
    age : new FormControl('' , [ Validators.required ])

  });

  get name(){
    
    return this.form2.get('name');
  }
  get age(){
    return this.form2.get('age');
  }

  getCurrentUser(){
    return this.currUser;
  }

  registerUser(){
    console.log('Inside Login.');
    console.log('Name:',this.form2.value.name);
    console.log('Age:',this.form2.value.age);

    this.store.dispatch({
      type: 'ADD_USER',
      payload: <User> {
        name: this.form2.value.name,
        age: this.form2.value.age
      }
    });
  }

}

