import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { P404Component } from './404.component';
// import { P500Component } from './500.component';
import { LoginComponent } from './login.component';
// import { RegisterComponent } from './register.component';
// import { CodeVerificationComponent } from './codeverification.component';

const routes: Routes = [
  {
    path: 'login',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    data: {
      title: 'Example Pages'
    },
    children: [
    
      {
        path: '',
        component: LoginComponent,
        data: {
          title: 'Login Page'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
