import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { NullLayoutComponent } from './layouts/null-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import { PmsLayoutComponent } from './layouts/pms-layout.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './dashboard/home.component';
import { PracticeComponent } from './pms/practice.component';
import { Page404Component } from './page404.component';

export const routes: Routes = [
  
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full',
  // },
  { path : '' , component : LoginComponent } ,

  { path : 'login' , component : LoginComponent } ,
  { path : 'register' , component : LoginComponent } ,
  
  {
    path: 'dashboard',
    component: SimpleLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
     
     
    ]
  },
  {
    path: 'pms',
    component: PmsLayoutComponent,
    data: {
      title: 'pms'
    },
    children: [
      {
        path: '',
        loadChildren: './pms/pms.module#PmsModule'
      },
     
     
    ]
  },
  // {
  //   path: 'login',
  //   component: NullLayoutComponent,
  //   data: {
  //     title: 'Pages'
  //   },
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: './pages/pages.module#PagesModule',
  //     }
  //   ]
  // },
  {
    path: '**',
    component: Page404Component,
    data: {
      title: 'Pages'
    }
  }
  
];
// export const routes: Routes = [
//   { path : '' , component : LoginComponent } ,

//   { path : 'login' , component : LoginComponent } ,
//   { path : 'register' , component : LoginComponent } ,
  
//   { path : 'dashboard' , component : SimpleLayoutComponent,
//     children :[
//       { path : '' , component : HomeComponent}
//     ]
//   },
//   { path : 'pms' , component : PmsLayoutComponent,
//     children :[
//       { path : '' , component : PracticeComponent}
//     ]
//   }
// ];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
