import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Courses } from 'src/app/models/courses.model';
import { CourseService } from 'src/app/services/courses/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  coursesData:Courses[];
  courseForm:FormGroup;
  selectedCourseid:string;
  isVisible = false
  constructor(private coursesService:CourseService, private fb:FormBuilder){
    
  }
  ngOnInit(){
    this.getAllCourses();
    this.createCourseForm();
  }

  getAllCourses(){
    this.coursesService.getAllCourses().subscribe((res:any) => {
      let { data } = res;
      this.coursesData = data.allCourses
    })
  }

  deleteCourse(courseID:string){
    this.coursesService.deleteCourse(courseID).subscribe((res:any) => {
      console.log(res)
      //  this.coursesData = this.coursesData.filter(x => x.id !== courseID);
    })
  }

  editCourse(courseData:any){
    this.selectedCourseid = courseData.id;
    this.courseForm.controls['coursetitle'].setValue(courseData.coursetitle)
    this.isVisible = true
  }

  showAddCourseModal(){
    this.isVisible = true;
  }

  createCourseForm(){
    this.courseForm = this.fb.group({
      coursetitle:['', Validators.required]
    })
  }

  handleOk(){
    if(this.courseForm.valid){
        this.coursesService.createCourse(this.courseForm.value).subscribe(res => {
          this.isVisible = false
        })
    }else{
      Object.values(this.courseForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  handleCancel(){
    this.isVisible = false;
    this.courseForm.reset();
  }
}
