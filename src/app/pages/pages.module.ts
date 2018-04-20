import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';


//import { ReactiveFormsModule} from 
import { RouterModule } from '@angular/router';
// import { P404Component } from './404.component';
// import { P500Component } from './500.component';
import { LoginComponent } from './login.component';
// import { RegisterComponent } from './register.component';
// import { CodeVerificationComponent } from './codeverification.component';

import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [CommonModule,RouterModule, PagesRoutingModule,FormsModule, ReactiveFormsModule ],
  declarations: [
    // P404Component,
    // P500Component,
    LoginComponent,
    // RegisterComponent,
    // CodeVerificationComponent,
  ],
  providers: [],
})
export class PagesModule { }
