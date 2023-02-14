import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentsComponent } from './assignments/assignments.component';
import { CoursesComponent } from './courses/courses.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, children:[
    {
      path:'courses',
      component:CoursesComponent
    },
    {
      path:'submissions',
      component:SubmissionsComponent
    },
    {
      path:'assignments',
      component:AssignmentsComponent
    }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
