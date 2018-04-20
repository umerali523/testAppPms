



import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup , Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { NgModule } from '@angular/core';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(private router : Router) {
 
   }

  ngOnInit() {
   
  }

  form = new FormGroup({
    username : new FormControl('' , [ Validators.required]),
    password : new FormControl('' , [ Validators.required])

  });

  get username(){
    
    return this.form.get('username');
  }
  get password(){
    return this.form.get('password');
  }
  
}

