import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { PracticeServService } from './practice-serv.service';



@Component({
  templateUrl: 'location.component.html'
})
export class LocationComponent implements OnInit {

  constructor(private pracServ : PracticeServService) {
    this.mListSpin  = true;
   }
   
    locationList = new Array();
    mListSpin = true;
    recordStatus = true;
    errorMessage;

    ngOnInit(){
      
        this.mListSpin = true;
        this.pracServ.getLocationList().subscribe(res=>{
          console.log('Location oninit:',res);
          if( res['response']['data']){
           this.locationList = res['response']['data'];
            this.recordStatus = true;
            this.mListSpin = false;
                
          }
      
        },
      err=>{
        this.errorMessage = err.message
        this.recordStatus = false;
        this.mListSpin = false;
        
      });
      
      
        }
}