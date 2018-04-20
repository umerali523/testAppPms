import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AuthGuard } from '../auth.guard';




const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full',
  },
  {

    path: '',
    data: {
      title: 'Example Pages'
    },
    children: [
      {
        path: 'homepage',
        component: HomeComponent,
       // canActivate : [AuthGuard],
        data: {
          title: 'Page 404'
        }
      }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule {}
  