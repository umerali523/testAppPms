import { PracticeServService } from './practice-serv.service';

import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';



@Component({
  templateUrl: 'practice.component.html'
})
export class PracticeComponent implements OnInit {

  constructor(private pracServ : PracticeServService,private modalService: BsModalService) {
    this.mListSpin  = true;
   }
  practiceList = new Array();
  mListSpin = true;
  recordStatus = true;
  errorMessage;
  
  ngOnInit(){
  
  this.mListSpin = true;
  this.pracServ.getPracticeList().subscribe(res=>{
    console.log('Res oninit:',res);
    if( res['response']['data']['practices']){
      this.practiceList = res['response']['data']['practices'];
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

  @ViewChild('template')
  public template: TemplateRef<any>;
  modalRef: BsModalRef;

  openModal(temp){
    this.modalRef = this.modalService.show(temp);

  }
  closeModal(){
    this.modalRef.hide();
  }
  deleteMember(){
    this.pracServ.deleteMember(9);
    this.modalRef.hide();
    console.log('Deleting Member');
  }

}
