import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared/shared.module';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { CoursesComponent } from './courses/courses.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [WelcomeRoutingModule, SharedModule, CommonModule, ReactiveFormsModule, FormsModule],
  declarations: [WelcomeComponent, CoursesComponent, AssignmentsComponent, SubmissionsComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
