import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs';
import { Courses } from 'src/app/models/courses.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private apollo: Apollo) { }


  getAllCourses(){
    return this.apollo.watchQuery({
      query:gql`
        query CoursesQuery{
          allCourses{
            id,
            coursetitle
          }
        }
      `
    })
    .valueChanges
  }

  getCourseByID(courseID:string){
    return this.apollo.watchQuery({
      query:gql`
      query CoursesQuery{
        courseById(id:"${courseID}"){
          id,
          coursetitle
        }
      }
      `
    }).result()
  }

  createCourse(payload:Courses){
    let {id, coursetitle} = payload;
    return this.apollo.mutate({
      mutation:gql`
      mutation CoursesMutation($coursetitle:String!){
        saveCourse(courseTitle:$coursetitle){
          course{
            id,
            coursetitle
          }
        }
      }
    `,variables:{
      coursetitle
    }
    ,refetchQueries:[{
      query:gql`
      query CoursesQuery{
        allCourses{
          id,
          coursetitle
        }
      }
      `
    }]
    })
  }

  editCourse(payload:Courses){
    let {id, coursetitle} = payload;
    this.apollo.mutate({
      mutation:gql`
      mutation CoursesMutation($coursetitle:String!, $id:String!){
        editCourse(courseTitle:$coursetitle, id:$id){
          course{
            id,
            coursetitle
          }
        }
      }
      `,variables:{
        id,
        coursetitle
      },
      refetchQueries:[
        {query:gql`
        query CoursesQuery{
          allCourses{
            id,
            coursetitle
          }
        }
      `}]
    })
  }

  deleteCourse(id:string){
   return this.apollo.mutate({
      mutation:gql`
      mutation CoursesMutation($id:ID){
        deleteCourse(id:$id){
          course{
            id,
            coursetitle
          }
        }
      }
      `,variables:{
        id
      }
      ,refetchQueries:[
        {query:gql`
        query CoursesQuery{
          allCourses{
            id,
            coursetitle
          }
        }
      `}
    ]
    })
    
  }
}
