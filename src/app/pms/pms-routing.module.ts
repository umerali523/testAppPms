import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { PracticeComponent } from './practice.component';
import { EditMemberComponent } from './editMember.component';
import { AddPracticeComponent } from './addPractice.component';
import { LocationComponent } from './location.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'practice',
    pathMatch: 'full',
  },
  {

    path: '',
    data: {
      title: 'Example Pages'
    },
    children: [
      {
        path: 'practice',
        component: PracticeComponent,
        data: {
          title: 'Page 404'
        }
      },
      {
        path: 'location',
        component: LocationComponent,
        data: {
          title: 'Page 404'
        }
      },
      {
        path: 'editMember',
        component: EditMemberComponent,
        data: {
          title: 'Page 404'
        }
      }
      ,
      {
        path: 'addPractice',
        component: AddPracticeComponent,
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
  export class PmsRoutingModule {}
  