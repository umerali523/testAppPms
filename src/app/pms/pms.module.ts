import { NgModule } from '@angular/core';
// import { ChartsModule } from 'ng2-charts/ng2-charts';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// import { DashboardComponent } from './dashboard.component';`
import { PmsRoutingModule } from './pms-routing.module';
import { PracticeComponent } from './practice.component';
import { PracticeServService } from './practice-serv.service';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { EditMemberComponent } from './editMember.component';
import { AddPracticeComponent } from './addPractice.component';
import { SpinnerModule } from 'angular2-spinner/dist';
import { Daterangepicker } from 'ng2-daterangepicker';
import {NgxMaskModule} from 'ngx-mask'
import { LocationComponent } from './location.component';



@NgModule({
  imports: [
    PmsRoutingModule,
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    SpinnerModule,
    Daterangepicker,
    NgxMaskModule.forRoot()
    // ChartsModule,
    // BsDropdownModule
  ],
  providers : [PracticeServService],
  declarations: [ PracticeComponent,EditMemberComponent , AddPracticeComponent , LocationComponent ]
})
export class PmsModule { }
