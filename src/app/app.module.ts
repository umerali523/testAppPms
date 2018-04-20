import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
//import { HomeComponent } from './dashboard/home.component';
//import { PracticeComponent } from './pms/practice.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import { NullLayoutComponent } from './layouts/null-layout.component';
import { PmsLayoutComponent } from './layouts/pms-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap';

import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';
import { Page404Component } from './page404.component';
import { LoginServService } from './login/login-serv.service';
import { AuthGuard } from './auth.guard';
import { SharedServService } from './shared-serv.service';
import { SpinnerModule } from 'angular2-spinner/dist';
import { CommonServService } from './common-serv.service';
import { PersistenceModule } from 'angular-persistence';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfig } from './httpconfig.interceptor';



//import { LoginService } from './login/login.service';
import { StoreModule } from '@ngrx/store';
import { addUserReducer } from './reducers/app.reducer';
import { PracticeServService } from './pms/practice-serv.service';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SimpleLayoutComponent,
    NullLayoutComponent,
    SidebarComponent,
    PmsLayoutComponent,
    //HomeComponent,
    //PracticeComponent,
    
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    Page404Component
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule, 
    SpinnerModule,
    PersistenceModule,

    StoreModule.forRoot({user: addUserReducer})
    


  ],
  providers: [LoginServService , AuthGuard , SharedServService , CommonServService,PracticeServService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpConfig,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
