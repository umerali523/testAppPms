import { NgModule } from '@angular/core';
// import { ChartsModule } from 'ng2-charts/ng2-charts';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// import { DashboardComponent } from './dashboard.component';`
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home.component';

import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 



@NgModule({
  imports: [
    DashboardRoutingModule,
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    // ChartsModule,
    // BsDropdownModule
  ],
  declarations: [ HomeComponent ]
})
export class DashboardModule { }
