
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';



@Component({
  templateUrl: 'editMember.component.html'
})
export class EditMemberComponent implements OnInit {

  

  constructor(){}
  ngOnInit(){}
  form = new FormGroup({
      name : new FormControl('',[Validators.required]),
      speed_limit : new FormControl('',[Validators.required]),
      time_limit : new FormControl('',[Validators.required]),

  });
  editMember(){
    console.log('Editing Member:',this.form.value);
  }
  
}